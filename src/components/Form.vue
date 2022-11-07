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
}
</script>

<template>
    <div>
        <FormKit type="form" ref="f" v-model="props.context.node.value" :actions="false" @submit="onSubmitForm">
            <el-form label-position="left" ref="form" label-width="auto">
                <slot></slot>
            </el-form>
        </FormKit>
        <el-button type="primary" @click="onSubmit" :icon="Check">Submit</el-button>
    </div>
</template>