<script setup>
import { createInput } from '@formkit/vue'
import myinput from './components/Input.vue'
import { ref } from "vue";


const input_test = createInput(myinput);

const values = ref({})
const data = ref({
  input1: "",
  input2: "input2",
  input3: "",
  //  radio1: "1",
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


let onSubmit = () => {
  console.log("onSubmit", JSON.stringify(data.value));
}

</script>



<template>
  <div>
    formkit
    <!--    <FormKit type="form" v-model="values">
      <FormKit :type="input_test" label="Username" name="two_factor_code" help="We’ve sent a code to your phone."
        validation="required" validation-visibility="live" />
    </FormKit>
    <pre>{{ values }}</pre> -->

    <hr />
    <!-- FormKit type="elForm" v-model="data">
      <FormKitSchema :schema="schema" />
    </FormKit -->

    <FormKit type="elForm" v-model="data" @submit="onSubmit">

      <FormKit type="text" label="test" name="input1" validation="required" />
      <!-- FormKit type="elFormInput" label="input2" name="input2" validation="required" validation-visibility="dirty" /-->
      <FormKit type="elFormInput" label="input3" name="input3" validation="required" placeholder="testing3" clearable />


      <FormKit type="elFormSelect" label="Select" name="select" :options="{
        mercury: 'Mercury',
        venus: 'Venus',
        earth: 'Earth',
        mars: 'Mars',
        jupiter: 'Jupiter',
        saturn: 'Saturn',
        uranus: 'Uranus',
        neptune: 'Neptune',
      }" validation="required" clearable placeholder="select placeholder" />

      <FormKit type="elFormCheckbox" label="Checkbox1" name="cb1" validation="required" />

      <FormKit type="elFormRate" label="Rate" name="rate1" />
      <FormKit type="elFormSwitch" label="Switch" name="switch1" />
      <FormKit type="elFormTimePicker" label="Time Picker 1" name="time_picker_1" />
      <FormKit type="elFormInputNumber" label="input nubmer 1" name="input_number_1" />

      <FormKit type="elFormRadioGroup" label="Radio Group" name="radio1" :options="{
        mercury: 'Mercury',
        venus: 'Venus',
        earth: 'Earth',
        mars: 'Mars',
        jupiter: 'Jupiter',
        saturn: 'Saturn',
        uranus: 'Uranus',
        neptune: 'Neptune',
      }" validation="required" />


      <FormKit type="elFormSlider" label="Slider1" name="slider1" />
      <FormKit type="elFormSlider" label="Slider2" name="slider2" :min="100" :max="200" :step="2" />

      <FormKit type="elFormColorPicker" label="ColorPicker" name="color1" />


    </FormKit>



    <pre>{{ data }}</pre>





  </div>
</template>
