<script setup>
import { ref, watch } from "vue"

const props = defineProps({
    context: Object,
})

let value = ref(null);

watch(() => value.value, (val) => {
    props.context.node.input(val);
})
console.log(props.context.classes);
props.context.classes.inner = "";
</script>

<template>
    <el-select v-model="value" :filterable="props.context.filterable" :multiple="context.node.props.multiple"
        :clearable="props.context.clearable" :placeholder="context.placeholder">
        <el-option v-for="(label, value) in context.options" :key="value" :label="label" :value="value"></el-option>
    </el-select>
</template>