import Vue from "vue";
import VueRouter from "vue-router";
import pageA from "../components/pageA";
import pageB from "../components/pageB";
import pageC from "../components/pageC";
import Index from "../views/index";

Vue.use(VueRouter);

const routes = [
  {
    name: "index",
    path: "/",
    component: Index
  },
  {
    name: "a",
    path: "/a",
    component: pageA
  },
  {
    name: "b",
    path: "/b",
    component: pageB
  },
  {
    name: "c",
    path: "/c",
    component: pageC
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
