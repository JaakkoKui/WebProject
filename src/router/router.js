import {createWebHistory, createRouter} from "vue-router";
import HomePage from "@/views/HomePage";
import PostPage from "@/views/PostPage";

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
        }
    ]
})

export default router