<script setup>
import { ref } from "vue";
const data = ref({
    input1: ""
})

</script>

<template>
    <FormKit type="elForm" v-model="data">

        <FormKit type="elFormInput" label="elInput" name="input1" />


        <FormKit type="elUpload" label="elUpload" name="upload">
            <el-button>upload</el-button>
        </FormKit>

        <FormKit type="elFormUpload" label="elFormUpload" name="upload1">
            <el-button>upload</el-button>
        </FormKit>
    </FormKit>



    <pre wrap>{{ data }}</pre>
</template>