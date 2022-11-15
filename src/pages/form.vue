<script setup>
import { onMounted, ref } from "vue";
let data = ref({});
let onClickSubmit = () => {
    console.log(data.value);
}

let onClickBack = () => {
    console.log('back');
}
</script>
<template>
    <pre wrap>{{ data }}</pre>


    <FormKit type="elForm" v-model="data" label-width="120px" :submit="onClickSubmit">
        <FormKit type="elFormInput" label="Name abcdef" name="name" validation="required" />
        <FormKit type="elFormInput" label="Code" name="code" />
        <FormKit type="elFormTextarea" label="Remark" name="remark" />

        <template #footer="{ submit }">
            <el-button type="primary" @click="submit">Submit</el-button>
            <el-button @click="onClickBack">Back</el-button>
        </template>
    </FormKit>


    
</template> 