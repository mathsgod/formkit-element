<script setup>
import { ref, watch } from "vue"

const props = defineProps({
    context: Object,
})

let value = ref(null);

watch(() => value.value, (val) => {
    props.context.node.input(val);
})

props.context.classes.inner = "";
</script>

<template>
    <el-input-number v-model="value" :clearable="props.context.clearable" @focusout="context.handlers.blur"
        v-bind="context.attrs" />

</template>