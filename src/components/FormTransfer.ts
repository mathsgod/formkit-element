
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem';
import Transfer from './Transfer'

export default defineComponent({
    props: ["context"],
    setup(props, { slots }) {
        props.context.classes.inner = "";

        return () => {
            return h(FormItem, {
                context: props.context
            }, [
                h(Transfer, {
                    context: props.context,
                    ...props.context.attrs
                }, slots)
            ])
        }
    }
});