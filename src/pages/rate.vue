<script setup>
import { ref } from "vue";
const data = ref({
    rate: 3,
})


</script>

<template>

    <FormKit type="elForm" v-model="data">
        <FormKit type="elRate" label="elRate" name="rate" help="help text" />
        <FormKit type="elFormRate" label="elFormRate" name="rate" />
    </FormKit>


    <pre wrap>{{ data }}</pre>


</template>