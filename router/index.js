import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("../views/Main"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/Home"),
      },
      {
        path: "/user",
        name: "user",
        component: () => import("../views/User"),
      },
    ],
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
