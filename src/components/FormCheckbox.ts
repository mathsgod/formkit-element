
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem';
import CheckBox from './CheckBox'

export default defineComponent({
    props: ["context"],
    setup(props) {
        props.context.classes.inner = "";

        return () => {
            return h(FormItem, {
                context: props.context
            },
                [
                    h(CheckBox, {
                        context: props.context,
                        ...props.context.attrs
                    })
                ]
            )
        }
    }
});