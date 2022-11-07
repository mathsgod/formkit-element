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
    <el-form-item :label="context.label" :error="error">
        <el-radio-group v-model="value">
            <el-radio v-for="(text, value) in context.options" :label="value">{{ text }}</el-radio>
        </el-radio-group>
        <div v-if="context.help" :class="context.classes.help" v-text="context.help" />
    </el-form-item>
</template>