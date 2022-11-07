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
    <el-radio-group v-model="value" v-bind="context.attrs">
        <el-radio v-for="(label, value) in context.options" :key="value" :label="label" :value="value" />
    </el-radio-group>
</template>