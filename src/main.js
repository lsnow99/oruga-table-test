import { createApp } from 'vue'
import App from './App.vue'
import "@oruga-ui/oruga-next/dist/oruga.css";
import "./index.css";
import Oruga from "@oruga-ui/oruga-next";

const app = createApp(App);
app.use(Oruga);
app.mount("#app");
