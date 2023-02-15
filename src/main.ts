import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import App from './App.vue'

import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

import { createElementPlugin } from "./components";


app.use(ElementPlus)
app.use(plugin, defaultConfig({
    plugins: [createElementPlugin()]
}))

import { createRouter, createWebHistory } from 'vue-router'

let router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("./pages/index.vue") },
        { path: '/input', component: () => import('./pages/input.vue') },
        { path: '/select', component: () => import('./pages/select.vue') },
        { path: '/upload', component: () => import('./pages/upload.vue') },
        { path: '/date', component: () => import('./pages/date.vue') },
        { path: '/rate', component: () => import('./pages/rate.vue') },
        { path: '/cascader', component: () => import('./pages/cascader.vue') },
        { path: '/switch', component: () => import('./pages/switch.vue') },
        { path: '/time', component: () => import('./pages/time.vue') },
        { path: '/autocomplete', component: () => import('./pages/autocomplete.vue') },
        { path: '/form', component: () => import('./pages/form.vue') },
        { path: '/transfer', component: () => import('./pages/transfer.vue') },
        { path: '/password', component: () => import('./pages/password.vue') },
        { path: '/slots', component: () => import('./pages/slots.vue') },
    ],
})

app.use(router);


app.mount('#app')
