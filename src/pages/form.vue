<script setup>
import { onMounted, ref } from "vue";
let data = ref({});
let data2 = ref({});
let onClickSubmit = () => {
    console.log(data.value);
}

let onClickBack = () => {
    console.log('back');
}

let onClickSubmit2 = () => {
    console.log(data2.value);
}

</script>
<template>
    <pre wrap>{{ data }}</pre>

    <FormKit type="elForm" v-model="data"  :submit="onClickSubmit">
        <FormKit type="elFormInput" label="Name abcdef" name="name" validation="required" />
        <FormKit type="elFormInput" label="Code" name="code" />
        <FormKit type="elFormTextarea" label="Remark" name="remark" />

        <template #footer="{ submit }">
            <el-button type="primary" @click="submit">Submit</el-button>
            <el-button @click="onClickBack">Back</el-button>
        </template>
    </FormKit>

    <pre wrap>{{ data2 }}</pre>

    <FormKit type="elForm" v-model="data2" :submit="onClickSubmit2">
        <FormKit type="elFormInput" label="Name abcdef" name="name" validation="required" />
        <FormKit type="elFormInput" label="Code" name="code" />
        <FormKit type="elFormTextarea" label="Remark" name="remark" />


    </FormKit>

</template> 