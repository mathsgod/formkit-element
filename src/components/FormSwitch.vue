<script setup>
import { ref, watch } from "vue"

const props = defineProps({
    context: Object,
})

let context = props.context;

let value = ref(context.node.value);

watch(() => value.value, (val) => {
    props.context.node.input(value);
})

let error = ref(null);

function showErrorMessage(messages) {
    let messagesArray = Object.entries(messages);
    if (messagesArray.length > 0) {
        error.value = messagesArray[0][1].value;
    } else {
        error.value = null;
    }
}

context.node.on("message-added", message => {
    //    console.log("message added", message);
    showErrorMessage(props.context.messages);
})
context.node.on("message-updated", message => {
    //  console.log("message updated", message);
    showErrorMessage(props.context.messages);
})

context.node.on("message-removed", message => {
    //console.log("message removed", message);
    showErrorMessage(props.context.messages);
})

</script>

<template>
    <el-form-item :label="context.label">
        <el-switch v-model="value" v-bind="context.attrs" />
        <div v-if="context.help" :class="context.classes.help" v-text="context.help" />
    </el-form-item>
</template>