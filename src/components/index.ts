import Input from './Input.vue'
import Textarea from './Textarea.vue'
import Rate from './Rate.vue'
import Select from "./Select.vue"
import Switch from "./Switch.vue"
import DatePicker from "./DatePicker.vue"
import TimePicker from "./TimePicker.vue"
import ColorPicker from "./ColorPicker.vue"
import Password from "./Password.vue"
import InputNumber from "./InputNumber.vue"
import Checkbox from "./Checkbox.vue"
import Slider from "./Slider.vue"
import TimeSelect from "./TimeSelect.vue"
import RadioGroup from "./RadioGroup.vue"
import Upload from "./Upload.vue"
import Autocomplete from "./Autocomplete.vue"

import FormInput from './FormInput.vue'
import FormPassword from './FormPassword.vue'
import FormDatePicker from './FormDatePicker.vue'
import FormTextarea from './FormTextarea.vue'
import Form from './Form.vue'
import FormTimePicker from './FormTimePicker.vue'
import FormTimeSelect from './FormTimeSelect.vue'
import FormSelect from './FormSelect.vue'
import FormCheckbox from './FormCheckbox.vue'
import FormRate from './FormRate.vue'
import FormSwitch from './FormSwitch.vue'
import FormInputNumber from './FormInputNumber.vue'
import FormRadioGroup from './FormRadioGroup.vue'
import FormSlider from './FormSlider.vue'
import FormColorPicker from './FormColorPicker.vue'
import { createInput } from '@formkit/vue'

export const elRate = createInput(Rate);
export const elSelect = createInput(Select, {
    props: ["options"]
});
export const elRadioGroup = createInput(RadioGroup, {
    props: ["options"]
});

export const elSwitch = createInput(Switch);
export const elInput = createInput(Input)
export const elTextarea = createInput(Textarea)
export const elPassword = createInput(Password)
export const elDatePicker = createInput(DatePicker)
export const elTimePicker = createInput(TimePicker)
export const elColorPicker = createInput(ColorPicker)
export const elInputNumber = createInput(InputNumber)
export const elCheckbox = createInput(Checkbox);
export const elSlider = createInput(Slider);
export const elTimeSelect = createInput(TimeSelect);
export const elUpload = createInput(Upload);
export const elAutocomplete = createInput(Autocomplete);

export const elForm: any = {
    type: "input",
    component: Form,
    props: ["submitLabel"]
}

export const elFormPassword: any = {
    type: "input",
    component: FormPassword,
}

export const elFormInput: any = {
    type: "input",
    component: FormInput,
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
    props: ["options"]
}

export const elFormCheckbox: any = {
    type: "input",
    component: FormCheckbox,
    props: ["options"]
}

export const elFormRate: any = {
    type: "input",
    component: FormRate,
}

export const elFormSwitch: any = {
    type: "input",
    component: FormSwitch,
}

export const elFormTimePicker: any = {
    type: "input",
    component: FormTimePicker,
}

export const elFormTimeSelect: any = {
    type: "input",
    component: FormTimeSelect,
}

export const elFormInputNumber: any = {
    type: "input",
    component: FormInputNumber,
}

export const elFormRadioGroup: any = {
    type: "input",
    component: FormRadioGroup,
    props: ["options"]
}

export const elFormSlider: any = {
    type: "input",
    component: FormSlider,
}

export const elFormColorPicker: any = {
    type: "input",
    component: FormColorPicker,
}