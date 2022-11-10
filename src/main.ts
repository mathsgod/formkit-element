import { createApp } from 'vue'
import ElementPlus, { ElInput, ElFormItem } from 'element-plus'
import 'element-plus/dist/index.css'


import App from './App.vue'

import { plugin, defaultConfig, createInput } from '@formkit/vue'
import '@formkit/themes/genesis'


import * as ElementPlusIconsVue from '@element-plus/icons-vue'



import * as Components from './components'

const app = createApp(App);


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}



app.use(ElementPlus)
app.use(plugin, defaultConfig({

    inputs: {
        ...Components,
        test: {
            type: "input",
            component: ElInput,
            props: ["clearable"]
        },

    }
}))

import { createRouter, createWebHistory } from 'vue-router'

let router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("./pages/index.vue") },
        { path: '/select', component: () => import('./pages/select.vue') }
    ],
})

app.use(router);


app.mount('#app')
