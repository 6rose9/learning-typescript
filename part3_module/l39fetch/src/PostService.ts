import fetch from 'node-fetch'; // no need above node 18+

interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export class PostService {

    private baseURL: string = "https://jsonplaceholder.typicode.com/posts";

    // get posts
    async getPosts(): Promise<Post[]> {
        // const response = fetch(this.baseURL);
        // console.log(response); Promise { <pending> }

        const response = await fetch(this.baseURL);

        if (!response.ok) throw new Error("Failed to fetch posts");
        return (await response.json()) as Post[];
    }

    // get post by id
    async getPostById(id: number): Promise<Post> {
        const response = await fetch(`${this.baseURL}/${id}`);
        if (!response.ok) throw new Error("Failed to fetch post");
        return (await response.json()) as Post;
    }

    // create post
    async createPost(newPost: Omit<Post, "id">): Promise<Post> {
        const response = await fetch(`${this.baseURL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost)
        });
        if (!response.ok) throw new Error("Failed to create post");
        return (await response.json()) as Post;
    }

    // update post
    async updatePost(id: number, updateData: Partial<Omit<Post, "id">>): Promise<Post> {
        const response = await fetch(`${this.baseURL}/${id}`, {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(updateData)
        });
        if (!response.ok) throw new Error("Failed to update post");
        return (await response.json()) as Post;
    }

    // delete post
    async deletePost(id: number): Promise<string> {
        await fetch(`${this.baseURL}/${id}`);
        return `Post with ID ${id} deleted successfully`;
    }
}

// Response {
//   status: 200,
//   statusText: 'OK',
//   headers: Headers {
//     date: 'Sun, 23 Aug 2026 03:23:26 GMT',
//     'content-type': 'application/json; charset=utf-8',
//     'transfer-encoding': 'chunked',
//     connection: 'keep-alive',
//     'access-control-allow-credentials': 'true',
//     'cache-control': 'max-age=43200',
//     'content-encoding': 'gzip',
//     etag: 'W/"6b80-Ybsq/K6GwwqrYkAsFxqDXGC7DoM"',
//     expires: '-1',
//     nel: '{"report_to":"heroku-nel","response_headers":["Via"],"max_age":3600,"success_fraction":0.01,"failure_fraction":0.1}',
//     pragma: 'no-cache',
//     'report-to': '{"group":"heroku-nel","endpoints":[{"url":"https://nel.heroku.com/reports?s=gTjOjZC1dBGIC0VHWr8YwygFu4Ai%2BdN4cylvv7fQ9SM%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785332341"}],"max_age":3600}',
//     'reporting-endpoints': 'heroku-nel="https://nel.heroku.com/reports?s=gTjOjZC1dBGIC0VHWr8YwygFu4Ai%2BdN4cylvv7fQ9SM%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785332341"',
//     server: 'cloudflare',
//     vary: 'Origin, Accept-Encoding',
//     via: '2.0 heroku-router',
//     'x-content-type-options': 'nosniff',
//     'x-powered-by': 'Express',
//     'x-ratelimit-limit': '1000',
//     'x-ratelimit-remaining': '999',
//     'x-ratelimit-reset': '1785332363',
//     age: '5629',
//     'cf-cache-status': 'HIT',
//     'cf-ray': 'a2f6ff9f8e2ed759-NRT',
//     'alt-svc': 'h3=":443"; ma=86400'
//   },
//   body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
//   bodyUsed: false,
//   ok: true,
//   redirected: false,
//   type: 'basic',
//   url: 'https://jsonplaceholder.typicode.com/posts'
// }