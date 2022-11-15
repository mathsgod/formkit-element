<script setup>
import { ref } from "vue";
const data = ref({})
</script>

<template>
    <pre wrap>{{ data }}</pre>
    <FormKit type="group" v-model="data">
        <FormKit type="elDatePicker" label="elDatePicker" name="date1" validation="required" />
        <FormKit type="elDateRangePicker" label="elDateRangePicker" name="date2" />
    </FormKit>


</template>