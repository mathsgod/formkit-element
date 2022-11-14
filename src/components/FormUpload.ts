import { ElFormItem, ElUpload } from 'element-plus';
import { defineComponent, h } from 'vue'

export default defineComponent({
    props: ["context"],
    setup(props, { slots }: any) {
        props.context.classes.inner = "";

        let children: any = [];
        let upload = h(ElUpload, {
            autoUpload: false,
            "modelValue:fileList": props.context.node.value,
            "onUpdate:fileList": (val: any) => {
                props.context.node.input(val);
            },
            style: {
                width: "100%"
            },
            ...props.context.attrs
        }, slots.default?.());

        children.push(upload);

        if (props.context.help) {
            children.push(h("div", {
                class: props.context.classes.help
            }, props.context.help));
        }

        return () => {
            return h(ElFormItem, {
                label: props.context.label,
            }, children);
        }
    }
})