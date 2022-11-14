
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem';
import InputNumber from './InputNumber'

export default defineComponent({
    props: ["context"],
    setup(props) {
        props.context.classes.inner = "";

        return () => {
            return h(FormItem, {
                context: props.context
            },
                [
                    h(InputNumber, {
                        context: props.context,
                        ...props.context.attrs
                    })
                ]
            )
        }
    }
});