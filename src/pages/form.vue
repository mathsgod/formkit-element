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

</script>
<template>
    <pre wrap>{{ data }}</pre>
    <FormKit type="elForm" v-model="data" :submit="onClickSubmit">
        <FormKit type="elFormInput" label="Name abcdef" name="name" validation="required" />
        <FormKit type="elFormInput" label="Code" name="code" />
        <FormKit type="elFormTextarea" label="Remark" name="remark" />
    </FormKit>

    <hr />

    <FormKit type="elForm" v-model="data" :submit="onClickSubmit">
        <FormKit type="elFormInput" label="Name abcdef" name="name" validation="required" />
        <FormKit type="elFormInput" label="Code" name="code" />
        <FormKit type="elFormTextarea" label="Remark" name="remark" />

        <template #footer="{ submit }">
            <el-button type="primary" @click="submit">Submit</el-button>
            <el-button @click="onClickBack">Back</el-button>
        </template>
    </FormKit>


</template> 