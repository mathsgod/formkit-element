<script setup>
import {  ref, watch } from "vue"

const props = defineProps({
    context: Object,
})

//console.log(props);

let value = ref(null);

watch(() => value.value, (val) => {
    props.context.node.input(value);
})


</script>

<template>
    <el-form-item :label="props.context.label" :prop="props.context.node.name">
        <el-input v-model="value" :clearable="props.context.clearable" type="textarea"></el-input>
    </el-form-item>
</template>