import { defineComponent, h } from 'vue'
import { ElUpload } from 'element-plus';
export default defineComponent({
    props: ["context"],
    setup(props, { slots }) {
        props.context.classes.inner = "";

        let children: any[] = [];
        if (slots.default) {
            children = slots.default();

        } else {
            children = props.context.slots?.default?.() ?? [];
        }

        return () => {
            return h(ElUpload, {
                autoUpload: false,
                "modelValue:fileList": props.context.node.value,
                "onUpdate:fileList": (val: any) => {
                    props.context.node.input(val);
                },
                ...props.context.attrs
            }, () => children
            )
        }


    },

})