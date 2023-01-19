import { ElSelect, ElOption } from 'element-plus';
import { defineComponent, h, ref } from 'vue'
import { normalizeOptions } from "@formkit/inputs";


export default defineComponent({
    props: ["context"],
    setup(props) {
        props.context.classes.inner = "";

        let v = ref(props.context.node.value);
        props.context.node.on("input", (val: any) => {
            v.value = val.payload;
        })

        let options = normalizeOptions(props.context.node.props.options ?? []);

        let OptionComponents = options.map((option: any) => {

            if (props.context.slots?.option) {

                return h(ElOption, {
                    value: option.value,
                }, props.context.slots.option({
                    item: option
                }));

            } else {

                return h(ElOption, {
                    label: option.label,
                    value: option.value
                })
            }
        })

        return () => {
            return h(ElSelect, {
                modelValue: v.value,
                "onUpdate:modelValue": (val: any) => {
                    props.context.node.input(val);
                    v.value = val;
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