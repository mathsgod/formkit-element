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
    <el-rate v-model="value" :size="props.context.size" />
</template>