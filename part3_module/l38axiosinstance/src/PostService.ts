import axios, { AxiosInstance } from "axios";

interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export class PostService {

    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: "https://jsonplaceholder.typicode.com/",
            timeout: 5000
        });
    }

    // get posts
    async getPosts(): Promise<Post[]> {
        // service response: Promise { <pending> }
        // const response = axios.get<Post[]>(`${this.baseUrl}posts`); 
        const response = await this.api.get<Post[]>(`posts`);
        // console.log("service response:", response);
        return response.data;
    }

    // get post by id
    async getPostById(id: number): Promise<Post> {
        const response = await this.api.get<Post>(`posts/${id}`);
        return response.data;
    }

    // create post
    async createPost(newPost: Omit<Post, "id">): Promise<Post> {
        const response = await this.api.post<Post>(`posts/`, newPost);
        return response.data;
    }

    // update post
    async updatePost(id: number, updateData: Partial<Omit<Post, "id">>): Promise<Post> {
        const response = await this.api.put<Post>(`posts/${id}`, updateData);
        return response.data;
    }

    // delete post
    async deletePost(id: number): Promise<string> {
        await this.api.delete(`posts/${id}`);
        return `Post with ID ${id} deleted successfully`;
    }
}