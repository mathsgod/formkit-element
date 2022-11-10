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

//slot doesn't work
</script>

<template>
    <el-upload>
        <slot></slot>
    </el-upload>

</template>