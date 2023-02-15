import { ElTransfer } from 'element-plus';
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
    props: ["context"],
    setup(props, { slots }) {
        if (props.context.classes.inner == "formkit-inner") {
            props.context.classes.inner = "";
        }

        if (props.context.classes.wrapper === "formkit-wrapper") {
            props.context.classes.wrapper = "";
        }

        const value = computed({
            get() {
                return props.context.value;
            },
            set(val) {
                props.context.node.input(val);
            }
        });


        return () => {
            return h(ElTransfer, {
                modelValue: value.value,
                "onUpdate:modelValue": (val: any) => {
                    value.value = val;
                },
                data: props.context.data,
                ...props.context.attrs
            }, props.context.slots);
        }
    }
});