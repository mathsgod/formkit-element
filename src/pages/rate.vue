<script setup>
import { ref } from "vue";
const data = ref({
    rate: 3,
    rate_half: 3.5,
})


</script>

<template>
    <FormKit type="form" v-model="data">
        <FormKit type="elFormRate" label="elFormRate" name="rate" />

        <FormKit type="elRate" label="elRate" name="rate" help="help text" />

        <FormKit type="elRate" label="elRate" name="rate" :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
            show-text />

        <FormKit type="elRate" label="elRate (allow-half)" name="rate_half" allow-half />
    </FormKit>

    <pre wrap>{{ data }}</pre>

</template>