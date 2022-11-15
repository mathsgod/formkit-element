<script setup>
import { ref } from "vue";
const data = ref({})
</script>

<template>


    <pre wrap>{{ data }}</pre>
    <FormKit type="group" v-model="data">
        <FormKit type="elTimePicker" label="elTimePicker" name="time1" />
        <FormKit type="elTimePicker" label="elTimePicker (range)" name="time2" is-range />
    </FormKit>



</template>