<script setup>
import { createInput } from '@formkit/vue'
import myinput from './components/Input.vue'
import { onMounted, ref } from "vue";
import { getNode } from '@formkit/core';


const input_test = createInput(myinput);

const values = ref({})
const data = ref({

});

const data2 = ref({

});
const schema2 = [
  {
    $formkit: "elInput",
    label: "username",
    help: "help",
    name: "username",
    validation: "required",
    "validation-visibility": "dirty",
    clearable: true
  },
  {
    $formkit: "elDatePicker",
    label: "Date",
    help: "help date",
    name: "date",
    validation: "required",
    "validation-visibility": "dirty"
  },

  {
    $formkit: "elFormInput",
    label: "Form input1",
    name: "input1",
    validation: "required|email",
    "validation-visibility": "dirty"
  },
  {
    $formkit: "elFormDatePicker",
    label: "Date picker",
    name: "date2"
  },
  {
    $formkit: "elFormTextarea",
    label: "Textarea",
    name: "input2"
  }
]

const schema = [

  {
    $formkit: "elFormInput",
    label: "Form input1",
    name: "input1",
    validation: "required|email",
    "validation-visibility": "dirty"
  }, {
    $formkit: "elFormDatePicker",
    label: "Date picker",
    name: "date2"
  }
];


const elf = ref({});

/* elf.value.node.on("submit", function () {
  console.log('node submit');
})
 */
onMounted(() => {
  /*   getNode("elform").on("submit", function () {
      console.log('node submit', data.value);
    }); */
})
</script>

<template>
  <div>

    <FormKit type="form" v-model="data">
      <FormKit type="elInput" name="input4" label="elInput" validation="required" />

      <FormKit type="elInput" name="input5" label="elInput (placeholder)" validation="required"
        placeholder="this is a placeholder" clearable />

      <FormKit type="elPassword" name="password1" label="elPassword" validation="required" show-password clearable
        placeholder="this is a password" />

      <FormKit type="elTextarea" name="textarea" label="elTextarea" placeholder="this is a textarea" />

      <FormKit type="elSelect" name="select2" label="elSelect" clearable :options="{
        mercury: 'Mercury',
        venus: 'Venus',
        earth: 'Earth',
        mars: 'Mars',
        jupiter: 'Jupiter',
        saturn: 'Saturn',
        uranus: 'Uranus',
        neptune: 'Neptune'
      }" />

      <FormKit type="elSelect" name="select2" label="elSelect (multiple)" :options="{
        mercury: 'Mercury',
        venus: 'Venus',
        earth: 'Earth',
        mars: 'Mars',
        jupiter: 'Jupiter',
        saturn: 'Saturn',
        uranus: 'Uranus',
        neptune: 'Neptune'
      }" multiple />

      <FormKit type="elRate" name="rate2" label="elRate" />

      <FormKit type="elSwitch" name="switch3" label="elSwitch" />

      <FormKit type="elDatePicker" name="date3" label="elDatePicker" />

      <FormKit type="elTimePicker" name="time2" label="elTimePicker" />

      <FormKit type="elColorPicker" name="color12" label="elColorPicker" />

      <FormKit type="elInputNumber" name="inputNumber2" label="elInputNumber" />

      <FormKit type="elCheckbox" name="cb5" label="elCheckbox" />

      <FormKit type="elSlider" name="slider2" label="elSlider" />

      <FormKit type="elTimeSelect" name="timeSelect3" label="elTimeSelect" />

      <FormKit type="elRadioGroup" label="elRadioGroup" name="radio3" :options="{
        mercury: 'Mercury',
        venus: 'Venus',
        earth: 'Earth',
        mars: 'Mars',
        jupiter: 'Jupiter',
        saturn: 'Saturn',
        uranus: 'Uranus',
        neptune: 'Neptune',
      }" />

    </FormKit>


    <pre>{{ data }}</pre>


    <el-divider>Component with form Item</el-divider>

    <FormKit type="elForm" label-width="auto" submit-label="OK" v-model="data2">

      <FormKit type="elFormInput" label="elFormInput" name="form_input_1" validation="required"
        placeholder="this is el-form-input" clearable />
      <FormKit type="elFormPassword" label="elFormPassword" name="form_password" validation="required" clearable
        show-password />

      <FormKit type="elFormSelect" label="elFormSelect" name="select" :options="{
        mercury: 'Mercury',
        venus: 'Venus',
        earth: 'Earth',
        mars: 'Mars',
        jupiter: 'Jupiter',
        saturn: 'Saturn',
        uranus: 'Uranus',
        neptune: 'Neptune',
      }" validation="required" clearable placeholder="select placeholder" filterable multiple />

      <FormKit type="elFormCheckbox" label="elFormCheckbox" name="cb1" validation="required" />

      <FormKit type="elFormRate" label="elFormRate" name="rate1" />
      <FormKit type="elFormSwitch" label="elFormSwitch" name="switch1" />
      <FormKit type="elFormDatePicker" label="elFormDatePicker" name="date_picker_1" />
      <FormKit type="elFormTimePicker" label="elFormTimePicker" name="time_picker_1" />
      <FormKit type="elFormTimeSelect" label="elFormTimeSelect" name="time_select_1" />

      <FormKit type="elFormInputNumber" label="elFormInputNumber" name="input_number_1" />

      <FormKit type="elFormRadioGroup" label="elFormRadioGroup" name="radio1" :options="{
        mercury: 'Mercury',
        venus: 'Venus',
        earth: 'Earth',
        mars: 'Mars',
        jupiter: 'Jupiter',
        saturn: 'Saturn',
        uranus: 'Uranus',
        neptune: 'Neptune',
      }" validation="required" />


      <FormKit type="elFormSlider" label="elFormSlider" name="slider1" />
      <FormKit type="elFormSlider" label="elFormSlider (with attrs)" name="slider2" :min="100" :max="200" :step="2" />

      <FormKit type="elFormColorPicker" label="elFormColorPicker" name="color1" />


    </FormKit>




    <pre>{{ data2 }}</pre>




  </div>
</template>
