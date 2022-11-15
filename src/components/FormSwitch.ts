
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem';
import Switch from './Switch'

export default defineComponent({
    props: ["context"],
    setup(props) {
        props.context.classes.inner = "";

        return () => {
            return h(FormItem, {
                context: props.context
            },
                [
                    h(Switch, {
                        context: props.context,
                        ...props.context.attrs
                    })
                ]
            )
        }
    }
});