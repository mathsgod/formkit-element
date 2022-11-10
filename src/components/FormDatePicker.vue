<script setup>
import { ref, watch } from "vue"

const props = defineProps({
    context: Object,
})

let context = props.context;

let value = ref(context.node.value);

watch(() => value.value, (val) => {
    props.context.node.input(val);
})

let required = props.context.node.props.parsedRules.some(rule => {
    if (rule.name === "required") {
        return true;
    }
});

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
    <el-form-item :label="props.context.label" :required="required">
        <el-date-picker v-model="value" v-bind="context.attrs" value-format="YYYY-DD-MM" />
    </el-form-item>
</template>