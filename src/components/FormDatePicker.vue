<script setup>
import { ref, watch } from "vue"

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
    <el-form-item :label="props.context.label" required :prop="props.context.node.name">
        <el-date-picker v-model="value" v-bind="context.attrs" value-format="YYYY-DD-MM" />
    </el-form-item>
</template>