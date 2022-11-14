<script setup lang="ts">
import { ref, watch } from "vue"
import { FormKitFrameworkContext } from "@formkit/core"


const props = defineProps<{
    context: FormKitFrameworkContext;
}>()

let context = props.context;

let value = ref(context.node.value);

watch(() => value.value, (val) => {
    props.context.node.input(val);
})

let required = props.context.node.props.parsedRules.some((rule: any) => {
    if (rule.name === "required") {
        return true;
    }
});

let error = ref<any>(null);

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
        <el-input v-model="value" @focusout="context.handlers.blur" v-bind="context.attrs" />
        <div v-if="context.help" :class="context.classes.help" v-text="context.help" />
    </el-form-item>
</template>