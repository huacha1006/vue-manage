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
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
