import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"

import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router"

// トップページとゲームページを読み込む
import TopPage from "./pages/TopPage.vue"
import PlayPage from "./pages/PlayPage.vue"

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "TopPage",
		component: TopPage,
	},
	{
		path: "/play",
		name: "PlayPage",
		component: PlayPage
	},
]

// 各画面のルーティング情報からルーターを作成する
const router = createRouter({
	history: createWebHistory(),
	routes: routes,
})

// `use` 関数を利用してルーターを使用可能にする
createApp(App).use(router).mount("#app")
