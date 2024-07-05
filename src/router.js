import { createWebHistory, createRouter } from "vue-router"
import ToDoView from "./ToDoView.vue"
import CalendarView from "./CalendarView.vue"

const routes = [
    { path: "/", component: ToDoView },
    { path: "/calendar", component: CalendarView }
]

const router = createRouter({
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    history: createWebHistory(),
    routes,
})

export default router