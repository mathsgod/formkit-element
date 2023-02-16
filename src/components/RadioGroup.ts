import { ElRadioGroup, ElRadio } from 'element-plus';
import { defineComponent, h, computed } from 'vue'
import { normalizeOptions } from "@formkit/inputs";

export default defineComponent({
    props: ["context"],
    setup(props) {
        if (props.context.classes.inner == "formkit-inner") {
            props.context.classes.inner = "";
        }

        const value = computed({
            get() {
                return props.context.value;
            },
            set(val) {
                props.context.node.input(val);
            }
        });

        let options = normalizeOptions(props.context.node.props.options ?? []);

        let OptionComponents = options.map((option: any) => {
            return h(ElRadio, {
                label: option.label,
                value: option.__original ?? option.value
            })
        })

        return () => {
            return h(ElRadioGroup, {
                modelValue: value.value,
                "onUpdate:modelValue": (val: any) => {
                    value.value = val;
                },
                onBlur() {
                    props.context.handlers.blur()
                },
                ...props.context.attrs
            }, () => OptionComponents
            );
        }
    }
});