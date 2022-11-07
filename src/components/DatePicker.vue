<script setup>
import { ref, watch } from "vue"
const props = defineProps({
    context: Object,
    type: String,
})

let value = ref(null);

watch(() => value.value, (val) => {
    props.context.node.input(value);
})


console.log(props)
</script>

<template>

    <div>
        <label :class="props.context.classes.label" v-text="props.context.label"></label>

        <el-date-picker v-model="value" />

        <div v-text="props.context.help" :class="props.context.classes.help"></div>

        <ul :class="context.classes.messages">
            <li v-for="msg in props.context.messages" :class="context.classes.message">
                {{ msg.value }}
            </li>
        </ul>

    </div>



</template>