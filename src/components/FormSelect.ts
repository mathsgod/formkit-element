
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem';
import Select from './Select'

export default defineComponent({
    props: ["context"],
    setup(props) {
        props.context.classes.inner = "";

        return () => {
            return h(FormItem, {
                context: props.context
            },
                [
                    h(Select, {
                        context: props.context,
                        ...props.context.attrs
                    })
                ]
            )
        }
    }
});