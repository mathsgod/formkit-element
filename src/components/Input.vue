<script setup>
import { ref, watch } from "vue"

const props = defineProps({
    context: Object,
})

let value = ref(null);

watch(() => value.value, (val) => {
    props.context.node.input(val);
})
</script>

<template>
    <el-input v-model="value" :clearable="props.context.clearable"></el-input>
</template>