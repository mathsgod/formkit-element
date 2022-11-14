<script setup>
import { ref } from "vue";
const data = ref({
    input1: ""
})


const cities = [
    {
        value: 'Beijing',
        label: 'Beijing',
    },
    {
        value: 'Shanghai',
        label: 'Shanghai',
    },
    {
        value: 'Nanjing',
        label: 'Nanjing',
    },
    {
        value: 'Chengdu',
        label: 'Chengdu',
    },
    {
        value: 'Shenzhen',
        label: 'Shenzhen',
    },
    {
        value: 'Guangzhou',
        label: 'Guangzhou',
    },
]

</script>

<template>
    <FormKit type="elForm" v-model="data">
        <FormKit type="elSelect" label="select" name="input1" :options="cities" />

        <FormKit type="elSelect" label="select (multiple)" name="input2" :options="cities" multiple />

        <FormKit type="elSelect" label="select (Custom template)" name="input3" :options="cities" multiple>
            <template #option="{ item }">
                <span style="float: left">{{ item.label }}</span>
                <span style="
                    float: right;
                    color: var(--el-text-color-secondary);
                    font-size: 13px;
                    ">{{ item.value }}
                </span>
            </template>

        </FormKit>
        <FormKit type="elFormSelect" label="select" name="input4" :options="cities" />
    </FormKit>



    <pre wrap>{{ data }}</pre>
</template>