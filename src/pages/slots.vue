<script setup>
import { ref } from 'vue'
let schema = ref([
    {
        $formkit: "checkbox",
        label: "Checkbox",
        options: [
            { value: "1", label: "One" },
            { value: "2", label: "Two" },
            { value: "3", label: "Three" }
        ],
        sectionsSchema: {
            label: {
                $el: "div",
                attrs: {
                    class: "custom-label"
                },
                children: [
                    "$option.value", " ", "$option.label"
                ]
            }
        }
    }
])

let data2 = ref([
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 24, city: "London" },
    { name: "Joe", age: 18, city: "Sidney" }
])


let schema2 = ref([
    {
        $cmp: "ElTable",
        props: {
            data: data2.value,
        },

        children: [
            {
                $cmp: "ElTableColumn",
                props: {
                    label: "Name",
                    __raw__test: {
                        header: {
                            children: [
                                "custom name"
                            ]
                        }
                    }
                }, children: [
                    "$row.name", " ", "$row.age"
                ]
            }

        ]
    }
])

</script>

<template>

    <form-kit-schema :schema="schema2" />

    <hr />
    <el-table :data="data2">
        <el-table-column label="Name">
            <template #header>
                <span>custom name</span>
            </template>
            <template #default>
                abc
            </template>
        </el-table-column>
    </el-table>




    <form-kit type="checkbox" label="Checkbox" :options="[
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' }]">
        <template #label="context">
            <div class="custom-label">
                {{ context.option.value }} {{ context.option.label }}
            </div>
        </template>
    </form-kit>

    <form-kit-schema :schema="schema" />
</template>

