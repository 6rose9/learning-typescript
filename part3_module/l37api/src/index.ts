import { PostService } from "./PostService";

// should be async bcz of api call
async function main() {
    const postService = new PostService();
    const posts = await postService.getPosts();
    console.log("posts", posts);
}

main();