import Input from './Input.vue'
import Rate from './Rate.vue'
import Select from "./Select.vue"

import FormInput from './FormInput.vue'
import FormDatePicker from './FormDatePicker.vue'
import FormTextarea from './FormTextarea.vue'
import Form from './Form.vue'
import DatePicker from './DatePicker.vue'
import FormTimePicker from './FormTimePicker.vue'
import FormSelect from './FormSelect.vue'
import FormCheckbox from './FormCheckbox.vue'
import FormRate from './FormRate.vue'
import FormSwitch from './FormSwitch.vue'
import FormInputNumber from './FormInputNumber.vue'
import FormRadioGroup from './FormRadioGroup.vue'
import FormSlider from './FormSlider.vue'
import FormColorPicker from './FormColorPicker.vue'

import { createInput } from '@formkit/vue'

export const elRate = createInput(Rate, {
    props: ["placeholder", "clearable"]
});

export const elSelect = createInput(Select, {
    props: ["clearable", "options", "placeholder", "filterable", "multiple"]

});

export const elInput = createInput(Input, {
    props: ["clearable"],
})

export const elDatePicker: any = {
    type: "input",
    component: DatePicker,
}

export const elForm: any = {
    type: "input",
    component: Form,
    props: ["submit"]
}

export const elFormInput: any = {
    type: "input",
    component: FormInput,
    props: ["placeholder", "clearable"]
}

export const elFormDatePicker: any = {
    type: "input",
    component: FormDatePicker
}

export const elFormTextarea: any = {
    type: "input",
    component: FormTextarea
}

export const elFormSelect: any = {
    type: "input",
    component: FormSelect,
    props: ["clearable", "options", "placeholder", "filterable", "multiple"]
}

export const elFormCheckbox: any = {
    type: "input",
    component: FormCheckbox,
    props: ["options"]
}

export const elFormRate: any = {
    type: "input",
    component: FormRate,
    props: ["size"]
}

export const elFormSwitch: any = {
    type: "input",
    component: FormSwitch,
    props: ["size"]
}

export const elFormTimePicker: any = {
    type: "input",
    component: FormTimePicker,
    props: ["placeholder"]
}

export const elFormInputNumber: any = {
    type: "input",
    component: FormInputNumber,
    props: ["placeholder", "clearable"]
}

export const elFormRadioGroup: any = {
    type: "input",
    component: FormRadioGroup,
    props: ["options"]
}

export const elFormSlider: any = {
    type: "input",
    component: FormSlider,
    props: ["min", "max", "step"]
}

export const elFormColorPicker: any = {
    type: "input",
    component: FormColorPicker,
}
