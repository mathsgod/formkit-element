<script setup>
import { ref, watch, h } from "vue"
import { normalizeOptions } from "@formkit/inputs";

const props = defineProps({
    context: Object,
})
let context = props.context;

let value = ref(props.context.node.value);

//watch for changes of node value, update the input value
props.context.node.on('input', (e) => {
    value.value = e.payload
});

watch(() => value.value, (val) => {
    props.context.node.input(val);
})

props.context.classes.inner = "";


let options = normalizeOptions(props.context.node.props.options ?? []);

let getOptionComponent = (option) => {

    let comp = props.context.slots.option({
        item: option
    });
    return h("div", {}, comp);
}
</script>

<template>
    <el-select v-model="value" v-bind="context.attrs">
        <el-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value">
            <component :is="getOptionComponent(option)" v-if="context.slots.option"></component>
        </el-option>
    </el-select>
</template>