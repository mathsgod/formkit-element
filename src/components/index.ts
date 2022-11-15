import { FormKitPlugin } from '@formkit/core';
import { createInput } from '@formkit/vue'

import Input from './Input'
import Textarea from './Textarea'
import Rate from './Rate'
import Select from "./Select"
import Switch from "./Switch"
import DatePicker from "./DatePicker"
import TimePicker from "./TimePicker"
import ColorPicker from "./ColorPicker"
import Password from "./Password"
import InputNumber from "./InputNumber"
import Checkbox from "./Checkbox"
import Slider from "./Slider"
import TimeSelect from "./TimeSelect"
import RadioGroup from "./RadioGroup"
import Upload from "./Upload"
import Autocomplete from "./Autocomplete"
import Cascader from './Cascader';
import DateRangePicker from './DateRangePicker';

import FormItem from "./FormItem"
import FormInput from './FormInput'
import FormPassword from './FormPassword'
import FormDatePicker from './FormDatePicker'
import FormTextarea from './FormTextarea'
import Form from './Form.vue'
import FormTimePicker from './FormTimePicker'
import FormTimeSelect from './FormTimeSelect'
import FormSelect from './FormSelect'
import FormCheckbox from './FormCheckbox'
import FormRate from './FormRate'
import FormSwitch from './FormSwitch'
import FormInputNumber from './FormInputNumber'
import FormRadioGroup from './FormRadioGroup'
import FormSlider from './FormSlider'
import FormColorPicker from './FormColorPicker'
import FormUpload from './FormUpload'
import FormDateRangePicker from './FormDateRangePicker'

export const createElementPlugin = (): FormKitPlugin => {

    return (node) => {
        switch (node.props.type) {
            case "elDateRangePicker":
                return node.define(createInput(DateRangePicker));
            case "elCascader":
                return node.define(createInput(Cascader));
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
            case "elFormDateRangePicker":
                return node.define({
                    type: "input",
                    component: FormDateRangePicker,
                });
        }
    }
};