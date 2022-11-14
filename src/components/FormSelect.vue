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
    <el-form-item :label="context.label" :error="error" :required="required">
        <el-select v-model="value" v-bind="context.attrs">
            <el-option v-for="(label, value) in context.options" :key="value" :label="label" :value="value"></el-option>
        </el-select>
        <div v-if="context.help" :class="context.classes.help" v-text="context.help" />
    </el-form-item>
</template>