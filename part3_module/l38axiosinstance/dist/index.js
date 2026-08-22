"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostService_1 = require("./PostService");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const postService = new PostService_1.PostService();
        try {
            const posts = yield postService.getPosts();
            console.log("Total Posts", posts.length);
            console.log("Retrieves 10 posts :", posts.slice(0, 10));
            console.log("\n----------------------------------------- Retrieve post by Id \n");
            const post = yield postService.getPostById(3);
            console.log("Post ID 3:", post);
            console.log("\n----------------------------------------- Create post \n");
            const newpost = yield postService.createPost({
                userId: 5,
                title: "Create post with axiso",
                body: "Good Moring, Crystal"
            });
            console.log("New Post:", newpost);
            console.log("\n----------------------------------------- Update post \n");
            const updatedPost = yield postService.updatePost(1, {
                title: "Updated Post"
            });
            console.log(updatedPost);
            console.log("\n----------------------------------------- Delete post \n");
            const deletePost = yield postService.deletePost(1);
            console.log(deletePost);
        }
        catch (err) {
            console.log(err.message);
        }
    });
}
main();
