import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";

const routes = [
    {
        path: "/",
        name: "App",
        component: App,

        children: [],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    if (to.path === "/") {
        // next("/users");
    } else {
        next();
    }
});

export default router;
