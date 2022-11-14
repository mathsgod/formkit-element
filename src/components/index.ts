import { FormKitPlugin } from '@formkit/core';
import { createInput } from '@formkit/vue'

import Input from './Input'
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

import FormItem from "./FormItem.vue"
import FormInput from './FormInput'
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
import FormUpload from './FormUpload'




export const createElementPlugin = (): FormKitPlugin => {

    return (node) => {
        switch (node.props.type) {
            case "elInput":
                return node.define(createInput(Input));
            case "elSwitch":
                return node.define(createInput(Switch));
            case "elTextarea":
                return node.define(createInput(Textarea))
            case "elPassword":
                return node.define(createInput(Password))
            case "elDatePicker":
                return node.define(createInput(DatePicker))
            case "elTimePicker":
                return node.define(createInput(TimePicker))
            case "elColorPicker":
                return node.define(createInput(ColorPicker))
            case "elInputNumber":
                return node.define(createInput(InputNumber))
            case "elCheckbox":
                return node.define(createInput(Checkbox));
            case "elSlider":
                return node.define(createInput(Slider));
            case "elTimeSelect":
                return node.define(createInput(TimeSelect));
            case "elUpload":
                return node.define(createInput(Upload));
            case "elAutocomplete":
                return node.define(createInput(Autocomplete));
            case "elRate":
                return node.define(createInput(Rate));
            case "elSelect":
                return node.define(createInput(Select, {
                    props: ["options"]
                }));
            case "elRadioGroup":
                return node.define(createInput(RadioGroup, {
                    props: ["options"]
                }));
            case "elForm":
                return node.define({
                    type: "input",
                    component: Form,
                    props: ["submitLabel", "submit"]
                });
            case "elFormPassword":
                return node.define({
                    type: "input",
                    component: FormPassword,
                });
            case "elFormInput":
                return node.define({
                    type: "input",
                    component: FormInput,
                });
            case "elFormDatePicker":
                return node.define({
                    type: "input",
                    component: FormDatePicker
                });
            case "elFormTextarea":
                return node.define({
                    type: "input",
                    component: FormTextarea
                });
            case "elFormSelect":
                return node.define({
                    type: "input",
                    component: FormSelect,
                    props: ["options"]
                });
            case "elFormCheckbox":
                return node.define({
                    type: "input",
                    component: FormCheckbox,
                    props: ["options"]
                });
            case "elFormRate":
                return node.define({
                    type: "input",
                    component: FormRate,
                });
            case "elFormSwitch":
                return node.define({
                    type: "input",
                    component: FormSwitch,
                });
            case "elFormTimePicker":
                return node.define({
                    type: "input",
                    component: FormTimePicker,
                });
            case "elFormTimeSelect":
                return node.define({
                    type: "input",
                    component: FormTimeSelect,
                });
            case "elFormInputNumber":
                return node.define({
                    type: "input",
                    component: FormInputNumber,
                });
            case "elFormRadioGroup":
                return node.define({
                    type: "input",
                    component: FormRadioGroup,
                    props: ["options"]
                });
            case "elFormSlider":
                return node.define({
                    type: "input",
                    component: FormSlider,
                });
            case "elFormColorPicker":
                return node.define({
                    type: "input",
                    component: FormColorPicker,
                });
            case "elFormItem":
                return node.define({
                    type: "input",
                    component: FormItem,
                });
            case "elFormUpload":
                return node.define({
                    type: "input",
                    component: FormUpload,
                });

        }
    }
};