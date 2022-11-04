<script setup>
import { ref, defineEmits } from "vue"

const props = defineProps({
    context: Object,
});


let context = props.context;

const f = ref(null);
const form = ref(null);
const onSubmit = async () => {
    f.value.node.submit();
}


const onSubmitForm = () => {
    console.log("onSubmitForm")
    //context.emit("submit");

    console.log(context);


}

</script>

<template>
    <div>
        <FormKit type="form" ref="f" v-model="props.context.node.value" :actions="false" @submit="onSubmitForm">
            <el-form label-position="left" ref="form" label-width="auto">
                <slot></slot>

            </el-form>
        </FormKit>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
    </div>
</template>