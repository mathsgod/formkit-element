<script setup>
import { ref, watch } from "vue"

const props = defineProps({
    context: Object,
})

let value = ref(props.context.node.value);

//watch for changes of node value, update the input value
props.context.node.on('input', (e) => {
    value.value = e.payload
});

watch(() => value.value, (val) => {
    props.context.node.input(val);
})

props.context.classes.inner = "";
</script>

<template>
    <el-select v-model="value" v-bind="context.attrs">
        <el-option v-for="(label, value) in context.options" :key="value" :label="label" :value="value"></el-option>
    </el-select>
</template>