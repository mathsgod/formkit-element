
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem';
import TimePicker from './TimePicker'

export default defineComponent({
    props: ["context"],
    setup(props) {
        props.context.classes.inner = "";

        return () => {
            return h(FormItem, {
                context: props.context
            },
                [
                    h(TimePicker, {
                        context: props.context,
                        ...props.context.attrs
                    })
                ]
            )
        }
    }
});