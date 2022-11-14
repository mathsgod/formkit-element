<script setup lang="ts">
import { FormKitFrameworkContext } from "@formkit/core";
import { ref, watch } from "vue"

const props = defineProps<{
    context: FormKitFrameworkContext;
}>()

let value = ref(null);

watch(() => value.value, (val) => {
    props.context.node.input(val);
})

props.context.classes.inner = "";
</script>

<template>
    <el-autocomplete v-model="value" v-bind="context.attrs" />

</template>