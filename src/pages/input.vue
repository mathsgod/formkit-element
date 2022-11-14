<script setup>
import { ref } from "vue";
const data = ref({
    input1: "hello"
})


</script>

<template>

    <FormKit type="elForm" v-model="data">
        <FormKit type="elInput" label="input1" name="input1" placeholder="This is a placeholder" help="help text" />
        <FormKit type="elInput" label="input2" name="input2" validation="required" />
    </FormKit>


    <FormKit type="elForm" v-model="data">
        <FormKit type="elFormInput" label="elFormInput" name="input1" validation="required"/>

    </FormKit>

    <pre wrap>{{ data }}</pre>


</template>