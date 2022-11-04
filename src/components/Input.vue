<script setup>
import { defineProps, ref, watch } from "vue"

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
    <el-input v-model="value" :clearable="props.context.clearable"></el-input>

</template>