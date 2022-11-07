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
    <el-form-item :label="props.context.label" :prop="props.context.node.name">
        <el-input v-model="value" type="textarea" v-bind="context.attrs" />
        <div v-if="context.help" :class="context.classes.help" v-text="context.help" />
    </el-form-item>
</template>