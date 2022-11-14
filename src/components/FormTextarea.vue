<script setup>
import { ref, watch } from "vue"

const props = defineProps({
    context: Object,
})

//console.log(props);

let value = ref(null);

watch(() => value.value, (val) => {
    props.context.node.input(val);
})

let error = ref(null);
function showErrorMessage() {
    let messagesArray = Object.entries(props.context.messages);
    error.value = (messagesArray.length > 0) ? messagesArray[0][1].value : null
}
context.node.on("message-added", showErrorMessage)
context.node.on("message-updated", showErrorMessage)
context.node.on("message-removed", showErrorMessage)

</script>

<template>
    <el-form-item :label="props.context.label" :prop="props.context.node.name" :error="error">
        <el-input v-model="value" type="textarea" v-bind="context.attrs" />
        <div v-if="context.help" :class="context.classes.help" v-text="context.help" />
    </el-form-item>
</template>