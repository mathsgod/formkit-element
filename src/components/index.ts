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
import Cascader from './Cascader'
import DateRangePicker from './DateRangePicker'
import Transfer from './Transfer'

import FormItem from "./FormItem.vue"
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
import FormTransfer from './FormTransfer'

import { forms, disablesChildren } from '@formkit/inputs';

export { FormItem, FormInput, FormPassword, FormDatePicker, FormTextarea, Form, FormTimePicker, FormTimeSelect, FormSelect, FormCheckbox, FormRate, FormSwitch, FormInputNumber, FormRadioGroup, FormSlider, FormColorPicker, FormUpload, FormDateRangePicker, FormTransfer }

let getFormItemComponent = (node: any, type: string) => {
    let define: any = {
        props: ["labelWidth", "labelPosition"]
    };

    type = type.replace(/[A-Z]/g, (m: string) => "-" + m.toLowerCase());

    switch (type) {
        case "el-form-input":
            define.component = FormInput;
            return node.define(define);
        case "el-form-password":
            define.component = FormPassword;
            return node.define(define);
        case "el-form-date-picker":
            define.component = FormDatePicker;
            return node.define(define);
        case "el-form-textarea":
            define.component = FormTextarea;
            return node.define(define);
        case "el-form-time-picker":
            define.component = FormTimePicker;
            return node.define(define);
        case "el-form-time-select":
            define.component = FormTimeSelect;
            return node.define(define);
        case "el-form-select":
            define.component = FormSelect;
            define.props.push("options");
            return node.define(define);
        case "el-form-checkbox":
            define.component = FormCheckbox;
            define.props.push("options");
            return node.define(define);
        case "el-form-rate":
            define.component = FormRate;
            return node.define(define);
        case "el-form-switch":
            define.component = FormSwitch;
            return node.define(define);
        case "el-form-input-number":
            define.component = FormInputNumber;
            return node.define(define);
        case "el-form-radio-group":
            define.props.push("options");
            define.component = FormRadioGroup;
            return node.define(define);
        case "el-form-slider":
            define.component = FormSlider;
            return node.define(define);
        case "el-form-color-picker":
            define.component = FormColorPicker;
            return node.define(define);
        case "el-form-upload":
            define.component = FormUpload;
            return node.define(define);
        case "el-form-date-range-picker":
            define.component = FormDateRangePicker;
            return node.define(define);
        case "el-form-transfer":
            define.component = FormTransfer;
            define.props.push("data");
            return node.define(define);

    }

}

export const createElementPlugin = (): FormKitPlugin => {

    return (node) => {
        let type = node.props.type;
        type = type.replace(/[A-Z]/g, (m: string) => "-" + m.toLowerCase());

        switch (type) {
            case "el-transfer":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormTransfer");
                }
                return node.define(createInput(Transfer, {
                    props: ["data"]
                }));
            case "el-date-range-picker":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormDateRangePicker");
                }
                return node.define(createInput(DateRangePicker));
            case "el-cascader":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormCascader");
                }
                return node.define(createInput(Cascader));
            case "el-input":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormInput");
                }
                return node.define(createInput(Input));
            case "el-switch":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormSwitch");
                }

                return node.define(createInput(Switch));
            case "el-textarea":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormTextarea");
                }
                return node.define(createInput(Textarea))

            case "el-password":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormPassword");
                }

                return node.define(createInput(Password))
            case "el-date-picker":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormDatePicker");
                }
                return node.define(createInput(DatePicker))

            case "el-time-picker":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormTimePicker");
                }
                return node.define(createInput(TimePicker))

            case "el-color-picker":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormColorPicker");
                }
                return node.define(createInput(ColorPicker))

            case "el-input-number":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormInputNumber");
                }
                return node.define(createInput(InputNumber))

            case "el-checkbox":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormCheckbox");
                }
                return node.define(createInput(Checkbox));

            case "el-slider":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormSlider");
                }
                return node.define(createInput(Slider));

            case "el-time-select":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormTimeSelect");
                }
                return node.define(createInput(TimeSelect));

            case "el-upload":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormUpload");
                }
                return node.define(createInput(Upload));

            case "el-autocomplete":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormAutocomplete");
                }
                return node.define(createInput(Autocomplete));
            case "el-rate":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormRate");
                }
                return node.define(createInput(Rate));
            case "el-select":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormSelect");
                }
                return node.define(createInput(Select, {
                    props: ["options"]
                }));

            case "el-radio-group":
                if (node.props.attrs["form-item"] !== undefined) {
                    return getFormItemComponent(node, "elFormRadioGroup");
                }
                return node.define(createInput(RadioGroup, {
                    props: ["options"]
                }));

            case "el-form":
                let n = node.define({
                    type: "group",
                    component: Form,
                    props: ["submitLabel", "submit", "labelWidth", "labelPosition", "actions"],
                    features: [forms, disablesChildren],

                });
                return n;
        }

        return getFormItemComponent(node, node.props.type);
    }


};