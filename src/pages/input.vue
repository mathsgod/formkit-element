<script setup>
import { ref } from "vue";
const data = ref({
    input1: "hello",
    input2: "input2"
})


//schema
let schema = [
    {
        $formkit: "elInput",
        name: "input1",
        label: "input1",
        outerClass: "col-md-6 abc abc1"
    },
    {
        $formkit: "elFormInput",
        name: "input2",
        label: "input2",
        outerClass: "col-md-6 abc def"
    }
]

</script>

<template>
    <pre wrap>{{ data }}</pre>
    <form-kit type="form" v-model="data">
        <el-form label-position="top">
            <form-kit type="el-input" name="input2" label="A" id="a"></form-kit>
            <form-kit type="el-input" name="input2" label="B" id="b"></form-kit>

            <form-kit type="el-input" name="input1" label="Form item input 2" validation="required"></form-kit>
            <form-kit type="el-input" name="input3" label="form item input"></form-kit>
        </el-form>
    </form-kit>

    <el-button @click="data.input1 = 'world'">Change</el-button>
    <hr />

    <!--     <FormKit type="elForm" v-model="data">
        <FormKit type="elInput" label="input1" name="input1" placeholder="This is a placeholder" help="help text" />
        <FormKit type="elInput" label="input2" name="input2" validation="required" />
    </FormKit> -->

    <!-- form-kit-schema :schema="schema"></form-kit-schema-->


    <!--    <FormKit type="elForm" v-model="data">
        <FormKit type="elFormInput" label="elFormInput" name="input1" validation="required" help="help text" />
    </FormKit> -->
    <!-- 
    <FormKit type="elForm" v-model="data">
        <FormKit type="elFormTextarea" label="elFormTextarea" name="textarea1" validation="required" help="help" />
    </FormKit>
 -->
</template>