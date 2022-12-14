
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem';
import TimeSelect from './TimeSelect'

export default defineComponent({
    props: ["context"],
    setup(props) {
        props.context.classes.inner = "";

        return () => {
            return h(FormItem, {
                context: props.context
            },
                [
                    h(TimeSelect, {
                        context: props.context,
                        ...props.context.attrs
                    })
                ]
            )
        }
    }
});