import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import "./assets/less/index.less";

import router from "../router";
import store from "./store";
import http from "axios";
import "../api/mock";

Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.use(ElementUI);

//路由守卫监听是否有token
router.beforeEach((to, from, next) => {
  store.commit("getToken");
  const token = store.state.user.token;
  if (!token && to.name !== "login") {
    next({ name: "login" });
  } else if (token && to.name === "login") {
    next({ name: "home" });
  } else {
    next();
  }
});

new Vue({
  store,
  router,
  render: (h) => h(App),
  created() {
    store.commit("addMenu", router);
  },
}).$mount("#app");
