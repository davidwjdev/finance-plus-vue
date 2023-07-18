import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { pinia } from "./store/pinia-setup";
import { library } from "@fortawesome/fontawesome-svg-core";
import router from "./router";

import { faHome } from "@fortawesome/free-solid-svg-icons";

library.add(faHome);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
