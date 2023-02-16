<script setup>
import { ref } from "vue";
const data = ref({
    status: 1,
    input1: ""
})

const STATUS = [
    {
        "label": "Active",
        "value": 0
    },
    {
        "label": "Inactive",
        "value": 1
    }
];


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
    <FormKit type="el-form" v-model="data">
        <!--  <FormKit type="el-select" label="select" name="input1" :options="cities" />

                <FormKit type="el-select" label="select (multiple)" name="input1" :options="cities" multiple />

                <FormKit type="el-select" label="select (Custom template)" name="input1" :options="cities" multiple>
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
                <FormKit type="el-select" label="select" name="input1" :options="cities" form-item /> -->
        <FormKit type="el-select" label="status" name="status" :options="STATUS" form-item />

        <FormKit type="select" label="status" name="status2" :options="STATUS" />
    </FormKit>



<pre wrap>{{ data }}</pre>
</template>