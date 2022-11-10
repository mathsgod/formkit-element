<script setup>
const props = defineProps({
    context: Object,
})

let context = props.context;
</script>

<template>
    <el-form-item :label="context.label" v-bind="context.attrs">
        <slot></slot>
    </el-form-item>
</template>