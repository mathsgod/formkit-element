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
    <el-time-picker v-model="value" @focusout="context.handlers.blur" v-bind="context.attrs" value-format="HH:mm:ss" />
</template>