<script setup>
import { onMounted, ref } from "vue";
let data = ref({
    name: "hello",

});
let data2 = ref({});
let onClickSubmit = () => {
    alert('submit');
}

let onClickBack = () => {
    alert('back');
}

let onClickSubmit2 = () => {
    alert('submit');
}

let data1 = ref({
    name: "hello",

});
</script>
<template>
    <pre wrap>{{ data1 }}</pre>

    <FormKit type="form" v-model="data1" :actions="false">
        <FormKit type="el-input" label="Name" name="name" validation="required" form-item/>
    </FormKit>

    <el-divider></el-divider>

    <pre wrap>{{ data }}</pre>

    <FormKit type="elForm" v-model="data" :submit="onClickSubmit" label-position="top">
        <FormKit type="el-input" label="Name abcdef" name="name" validation="required" />
        <FormKit type="el-input" label="Code" name="code" />
        <FormKit type="el-textarea" label="Remark" name="remark" />

        <!--         <template #footer="{ submit }">
            <el-button type="primary" @click="submit">Submit</el-button>
            <el-button @click="onClickBack">Back</el-button>
        </template> -->
    </FormKit>
</template> 