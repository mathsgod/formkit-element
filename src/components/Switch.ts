import { ElSwitch } from 'element-plus';
import { defineComponent, h, ref } from 'vue'

export default defineComponent({
    props: ["context"],
    setup(props) {
        props.context.classes.inner = "";

        let v = ref(props.context.node.value);
        props.context.node.on("input", (val: any) => {
            v.value = val.payload;
        })

        return () => {
            return h(ElSwitch, {
                modelValue: v.value,
                "onUpdate:modelValue": (val: any) => {
                    props.context.node.input(val);
                    v.value = val;
                },
                onBlur() {
                    props.context.handlers.blur()
                },
                ...props.context.attrs
            });
        }
    }
});