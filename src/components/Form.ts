
import { FormKit } from '@formkit/vue';
import { ElButton, ElForm } from 'element-plus';
import { defineComponent, h, ref } from 'vue'
import { Check } from "@element-plus/icons-vue"

export default defineComponent({
    props: ["context"],
    setup(props, { slots }) {
        props.context.classes.inner = "";

        let v = ref(props.context.node.value);
        props.context.node.on("input", (val: any) => {
            v.value = val.payload;
        })

        let submit_label = props.context.submitLabel ?? 'Submit';

        return () => {
            let form = h(ElForm, {
                labelWidth: props.context.labelWidth,
                labelPosition: props.context.labelPosition,
                ...props.context.attrs,
            }, slots);


            let f = ref(null);
            let form_kit = h(FormKit, {
                ref: f,
                type: "form",
                modelValue: v.value,
                actions: false,
                onSubmit() {
                    props.context.node.emit("submit");
                    props.context.submit?.();
                }
            }, form)

            let onSubmit = () => {
                if (f.value) {
                    (f.value as any).node.submit();
                }
            };

            let children = [form_kit];
            if (slots.footer) {
                children.push(h("div", {}, slots.footer({
                    submit: onSubmit
                })));
            } else {

                let submit_button = h(ElButton, {
                    type: "primary",
                    icon: Check,
                    onClick: () => {
                        if (f.value) {
                            (f.value as any).node.submit();
                        }
                    }
                }, () => submit_label);

                children.push(h("div", {}, submit_button));
            }

            return h("div", {}, children)
        }
    }
});