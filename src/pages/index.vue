<script setup>
import { onMounted, ref } from "vue";

const data = ref({
  input1: "hello"
});

const data2 = ref({

});

const elf = ref({});

/* elf.value.node.on("submit", function () {
  console.log('node submit');
})
 */

const createFilter = (queryString) => {
  return (restaurant) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
onMounted(() => {
  /*   getNode("elform").on("submit", function () {
      console.log('node submit', data.value);
    }); */

  restaurants.value = [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ]
})

const restaurants = ref([])
const querySearch = (queryString, cb) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  // call callback function to return suggestions
  cb(results)
}


let submitForm = () => {
  console.log('submitForm', data.value);

};

</script>



<template>
  <div>

    <FormKit type="elForm" v-model="data">

      <FormKit type="elSelect" label="select">
      </FormKit>
      <FormKit type="elFormItem" label="testing">
        <FormKit type="elInput" name="input1" validation="required" />
      </FormKit>

    </FormKit>


    <FormKit type="elForm" v-model="data" :submit="submitForm">
      <FormKit type="elInput" name="input1" label="elInput" />
      <FormKit type="elUpload" name="input2" label="elUpload">
        <el-button size="small" type="primary">Click to upload</el-button>
        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500KB.
          </div>
        </template>
      </FormKit>

    </FormKit>

    <el-button @click="data.input1 = 'world'">Change</el-button>

    <pre wrap>{{ data }}</pre>

    <el-divider></el-divider>

    <FormKit type="form" v-model="data">

      <FormKit type="elInput" name="input4" label="elInput" validation="required" help="this is input help" />

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

      <FormKit type="elAutocomplete" placeholder="input v" label="elAutocomplete" name="auto1" :trigger-on-focus="false"
        :fetch-suggestions="querySearch" clearable>
      </FormKit>


      <FormKit type="elUpload" label="elUpload" name="upload1">
        <el-button size="small" type="primary">Click to upload</el-button>
        <div slot="tip" class="el-upload__tip">only jpg/png files are allowed</div>
      </FormKit>

    </FormKit>


    <pre>{{ data }}</pre>


    <el-divider>Component with form Item</el-divider>

    <FormKit type="elForm" label-width="auto" submit-label="OK" v-model="data2">

      <FormKit type="elFormInput" label="elFormInput" name="form_input_1" validation="required"
        placeholder="this is el-form-input" clearable help="this is input help" />
      <FormKit type="elFormPassword" label="elFormPassword" name="form_password" validation="required" clearable
        show-password help="password help" />

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
