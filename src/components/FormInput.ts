
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem';
import Input from './Input'

export default defineComponent({
    props: ["context"],
    setup(props) {
        props.context.classes.inner = "";

        console.log(props.context);
        return () => {
            return h(FormItem, {
                context: props.context
            },
                [
                    h(Input, {
                        context: props.context,
                        ...props.context.attrs
                    })
                ]
            )
        }
    }
});