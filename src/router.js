import { createWebHistory, createRouter } from "vue-router"
import ToDoView from "./ToDoView.vue"
import CalendarView from "./CalendarView.vue"
import HomeView from "./HomeView.vue"
import NotFoundView from "./NotFoundView.vue"

const routes = [
    { path: "/", component: HomeView },
    { path: "/todo", component: ToDoView },
    { path: "/calendar", component: CalendarView },
    { path: '/:catchAll(.*)*', component: NotFoundView }
]

const router = createRouter({
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    history: createWebHistory(),
    routes,
})

export default router;