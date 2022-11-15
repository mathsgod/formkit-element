
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem';
import Input from './Input'

export default defineComponent({
    props: ["context"],
    setup(props, { slots }) {
        props.context.classes.inner = "";

        return () => {
            return h(FormItem, {
                context: props.context
            },
                [
                    h(Input, {
                        context: props.context,
                        ...props.context.attrs
                    }, () => slots.default?.())
                ]
            )
        }
    }
});