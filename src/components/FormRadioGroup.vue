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
function showErrorMessage() {
    let messagesArray = Object.entries(props.context.messages);
    error.value = (messagesArray.length > 0) ? messagesArray[0][1].value : null
}
context.node.on("message-added", showErrorMessage)
context.node.on("message-updated", showErrorMessage)
context.node.on("message-removed", showErrorMessage)

</script>

<template>
    <el-form-item :label="context.label" :error="error">
        <el-radio-group v-model="value">
            <el-radio v-for="(text, value) in context.options" :label="value">{{ text }}</el-radio>
        </el-radio-group>
        <div v-if="context.help" :class="context.classes.help" v-text="context.help" />
    </el-form-item>
</template>