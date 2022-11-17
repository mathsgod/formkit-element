<script setup>
import { ref } from 'vue';

let data = ref({});

const generateData = () => {
    const data = []
    for (let i = 1; i <= 15; i++) {
        data.push({
            key: i,
            label: `Option ${i}`,
            disabled: i % 4 === 0,
        })
    }
    return data
}

const options = ref(generateData());
</script>

<template>
    <pre wrap>{{ data }}</pre>
    <FormKit type="group" v-model="data">
        <FormKit type="elTransfer" label="elTransfer" name="value" :data="options" filterable />
    </FormKit>

    <FormKit type="group" v-model="data">
        <FormKit type="elFormTransfer" label="elFormTransfer" name="value" :data="options" filterable />
    </FormKit>
</template>
