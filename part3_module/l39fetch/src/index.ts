import { PostService } from "./PostService";

// should be async bcz of api call
async function main() {
    const postService = new PostService();
    try {
        const posts = await postService.getPosts();
        // console.log("Total Posts", posts.length);
        // console.log("Retrieves 10 posts :", posts.slice(0, 10));

        console.log("\n----------------------------------------- Retrieve post by Id \n");
        const post = await postService.getPostById(3);
        // console.log("Post ID 3:", post);

        console.log("\n----------------------------------------- Create post \n");
        const newpost = await postService.createPost({
            userId: 5,
            title: "Create post using fetch",
            body: "Good Moring, Crystal"
        });
        // console.log("New Post:", newpost);

        console.log("\n----------------------------------------- Update post \n")
        const updatedPost = await postService.updatePost(1, {
            title: "Updated Post"
        });
        // console.log(updatedPost);

        console.log("\n----------------------------------------- Delete post \n")
        const deletePost = await postService.deletePost(1);
        console.log(deletePost);

    } catch (err: any) {
        console.log(err.message);
    }
}

main();