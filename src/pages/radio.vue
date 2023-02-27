<script setup>
import { ref } from 'vue'

let data = ref({
    radio: ''
})
let schema = [
    {
        $formkit: 'el-radio-group',
        label: 'Radio',
        name: 'radio',
        options: [
            {
                label: 'Option 1',
                value: 'option1'
            },
            {
                label: 'Option 2',
                value: 'option2'
            },
            {
                label: 'Option 3',
                value: 'option3'
            }
        ]
    }
] 
</script>
<template>
    <div>
        {{ data }}

        <FormKit type="group" v-model="data">
            <FormKitSchema :schema="schema" />
        </FormKit>
    </div>
</template>