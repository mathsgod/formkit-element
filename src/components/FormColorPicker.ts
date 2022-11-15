
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem';
import ColorPicker from './ColorPicker'

export default defineComponent({
    props: ["context"],
    setup(props) {
        props.context.classes.inner = "";

        return () => {
            return h(FormItem, {
                context: props.context
            },
                [
                    h(ColorPicker, {
                        context: props.context,
                        ...props.context.attrs
                    })
                ]
            )
        }
    }
});