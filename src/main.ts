import { createApp } from 'vue'
import ElementPlus, { ElInput, ElFormItem } from 'element-plus'
import 'element-plus/dist/index.css'


import App from './App.vue'

import { plugin, defaultConfig, createInput } from '@formkit/vue'
import '@formkit/themes/genesis'


import * as Components from './components'

const app = createApp(App);
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


app.mount('#app')
