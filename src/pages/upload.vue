<script setup>
import { ref } from "vue";
const data = ref({})
</script>

<template>
    <pre wrap>{{ data }}</pre>
    <FormKit type="group" v-model="data">
        <FormKit type="elUpload" label="elUpload" name="upload">
            <el-button type="primary" size="small">select file</el-button>
        </FormKit>

        <FormKit type="elFormUpload" label="elFormUpload" name="upload1">
            <el-button type="primary" size="small">select file</el-button>
        </FormKit>
    </FormKit>
</template>