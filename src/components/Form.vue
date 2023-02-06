<script setup>
import { ref, useSlots } from 'vue'
import { Check } from "@element-plus/icons-vue"

let props = defineProps({
    context: Object
});


let node = props.context.node;
node.props.onSubmit = () => {
    if (node.props.submit) {
        node.props.submit();
    }
}

let onSubmit = async () => {
    props.context.handlers.submit(new Event("submit"));
}

let actions = ref(true);
if (node.props.actions === false) {
    actions.value = false;
}


let slots = useSlots();


//check has slot
let hasSlot = (name) => {
    return slots[name];
}

let hasFooter = hasSlot("footer");

let labelWidth = node.props.labelWidth;
let labelPosition = node.props.labelPosition;
console.log(props.context);


</script>
<template>
    <el-form :labelWidth="context.labelWidth" :labelPosition="context.labelPosition" v-bind="context.attrs">
        <slot></slot>

        <template v-if="actions">
            <template v-if="hasFooter">
                <slot name="footer" :submit="onSubmit"></slot>
            </template>

            <template v-else>
                <el-button type="primary" :icon="Check" @click="onSubmit">Submit</el-button>
            </template>

        </template>

    </el-form>
</template>
