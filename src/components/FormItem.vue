<script setup>
import { ref } from 'vue'
let props = defineProps(["context"]);

let error = ref(null);
function showErrorMessage() {
    let messagesArray = Object.entries(props.context.messages);
    error.value = (messagesArray.length > 0) ? messagesArray[0][1].value : null
}

let required = props.context.node.props.parsedRules.some((rule) => {
    if (rule.name === "required") {
        return true;
    }
});

props.context.node.on("message-added", showErrorMessage)
props.context.node.on("message-updated", showErrorMessage)
props.context.node.on("message-removed", showErrorMessage)

</script>
<template>
    <el-form-item :label="props.context.label" :required="required" :label-width="context.labelWidth"
        :label-position="context.labelPosition" :error="error" :class="context.node.props.outerClass">
        <slot />
        <div v-if="props.context.help" :class="props.context.classes.help">{{ props.context.help }}</div>
    </el-form-item>
</template>