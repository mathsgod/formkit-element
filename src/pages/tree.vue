<script setup>
import { ref } from 'vue'
let form = ref({
    tree: [4]
})

let data = [{
    label: "Level one 1",
    id: 1,

    children: [{
        label: "Level two 1-1",
        id: 2,
        children: [{
            label: "Level three 1-1-1",
            id: 3,
        }, {
            label: "Level three 1-1-2",
            id: 4,
        }, {
            label: "Level three 1-1-3",
            id: 5,
        }]
    }]

}]
</script>
<template>
    {{ form }}

    <form-kit type="form" v-model="form" :form-item="false">
        <form-kit type="el-tree" name="tree" :data="data" node-key="id" label="Tree"></form-kit>
    </form-kit>


    <form-kit type="form" v-model="form">
        <el-form>
            <form-kit type="el-tree" name="tree" :data="data" node-key="id" label="Tree" form-item></form-kit>
        </el-form>
    </form-kit>


</template> 