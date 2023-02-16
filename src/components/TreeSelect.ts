import { ElTreeSelect } from 'element-plus';
import { defineComponent, h, computed, ref, watch } from 'vue'

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
        

        return () => {
            return h(ElTreeSelect, {
                modelValue: value.value,
                "onUpdate:modelValue": (val: any) => {
                    value.value = val;
                },
                ...props.context.attrs,

            });
        }
    }
});