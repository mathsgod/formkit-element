import { ElTransfer } from 'element-plus';
import { defineComponent, h, ref } from 'vue'

export default defineComponent({
    props: ["context"],
    setup(props, { slots }) {
        props.context.classes.inner = "";

        if (props.context.classes.wrapper === "formkit-wrapper") {
            props.context.classes.wrapper = "";
        }

        let v = ref(props.context.node.value);
        props.context.node.on("input", (val: any) => {
            v.value = val.payload;
        })

        

        return () => {
            return h(ElTransfer, {
                modelValue: v.value,
                "onUpdate:modelValue": (val: any) => {
                    props.context.node.input(val);
                    v.value = val;
                },
                data: props.context.data,
                ...props.context.attrs
            },props.context.slots);
        }
    }
});