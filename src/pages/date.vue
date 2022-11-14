<script setup>
import { ref } from "vue";
const data = ref({})
</script>

<template>
    <FormKit type="elForm" v-model="data">
        <FormKit type="elDatePicker" label="elDate" name="date1" value-format="YYYY-MM" validation="required" />
        <FormKit type="elFormDatePicker" label="elFormDatePicker" name="date2" value-format="YYYY-MM"
            validation="required" />
    </FormKit>

    <pre wrap>{{ data }}</pre>
</template>