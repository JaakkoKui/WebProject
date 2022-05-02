import {createWebHistory, createRouter} from "vue-router";
import HomePage from "@/views/HomePage";
import PostPage from "@/views/PostPage";
import NewPostPage from "@/views/NewPostPage";

const history = createWebHistory(process.env.BASE_URL);
const router = createRouter({
    history,
    routes: [
        {
            path: "/",
            component: HomePage
        },
        {
            path: "/post/:id",
            component: PostPage
        },
        {
            path: "/newpost",
            component: NewPostPage
        }
    ]
})

export default router