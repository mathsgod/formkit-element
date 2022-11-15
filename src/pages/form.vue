<script setup>
import { onMounted, ref } from "vue";
let data = ref({});
let onClickSubmit = () => {
    console.log(data.value);
}
</script>
<template>
    <pre wrap>{{ data }}</pre>
    <FormKit type="elForm" v-model="data" :submit="onClickSubmit" submit-label="OK">
        <FormKit type="elFormInput" label="Name abcdef" name="name" validation="required" />
        <FormKit type="elFormInput" label="Code" name="code" />
        <FormKit type="elFormTextarea" label="Remark" name="remark" />
    </FormKit>
</template> 