<script setup>
import { ref } from "vue"
import { Check } from "@element-plus/icons-vue"

const props = defineProps({
    context: Object,
});

const f = ref(null);
const form = ref(null);
const onSubmit = async () => {
    f.value.node.submit();
}
const onSubmitForm = () => {
    props.context.node.emit("submit");
    props.context.submit?.();
}


let submit_label = props.context.submitLabel ?? 'Submit';



</script>

<template>
    <div>
        <FormKit type="form" ref="f" v-model="props.context.node.value" :actions="false" @submit="onSubmitForm">
            <el-form ref="form" v-bind="props.context.attrs">
                <slot></slot>
            </el-form>
        </FormKit>
        <el-button type="primary" @click="onSubmit" :icon="Check">{{ submit_label }}</el-button>
    </div>
</template>