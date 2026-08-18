import axios from "axios";

interface Post {
    id?: number;
    userId: number;
    title: string;
    body: string;
}

export class PostService {

    private baseUrl = "https://jsonplaceholder.typicode.com/";

    // get posts
    async getPosts(): Promise<Post[]> {
        // service response: Promise { <pending> }
        // const response = axios.get<Post[]>(`${this.baseUrl}posts`); 
        const response = await axios.get<Post[]>(`${this.baseUrl}posts`);
        // console.log("service response:", response);
        return response.data;
    }

    // get post by id

    // create post
}