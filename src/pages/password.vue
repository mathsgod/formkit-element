<script setup>
import { message } from "@formkit/inputs";
import { ref } from "vue";
const data = ref({
    input1: ""
})

let rules = [
    {
        pattern: "^/.{6},}$",
        message: "Password must be at least 6 characters long",
    }
]

</script>

<template>

    <FormKit type="elForm" v-model="data">
        <FormKit type="elFormInput" label="input1" name="input1" placeholder="This is a placeholder"
            validation="required" help="help text" validation-visibility="live" :rules="rules" />

    </FormKit>


    <pre wrap>{{ data }}</pre>


</template>