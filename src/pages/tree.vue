<script setup>










import { ref } from 'vue'
let form = ref({
    tree: [4]
})

let data = [{
    label: "Level one 1",
    id: 1,
    value: 1,

    children: [{
        label: "Level two 1-1",
        id: 2,
        value: 2,
        children: [{
            label: "Level three 1-1-1",
            id: 3,
            value: 3
        }, {
            label: "Level three 1-1-2",
            id: 4,
            value: 4
        }, {
            label: "Level three 1-1-3",
            id: 5,
            value: 5
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

    <form-kit type="form" v-model="form">
        <form-kit type="el-tree-select" name="treeselect" :data="data" label="el-tree-select" :render-after-expand="false" />

        <form-kit type="el-tree-select" name="treeselect2" :data="data" label="el-tree-select (checkbox)" show-checkbox :render-after-expand="false" />

        <form-kit type="el-tree-select" name="treeselect3" :data="data" label="el-tree-select (multiple)" multiple :render-after-expand="false" />
    </form-kit>

</template> 