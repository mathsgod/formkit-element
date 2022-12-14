
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem';
import Slider from './Slider'

export default defineComponent({
    props: ["context"],
    setup(props) {
        props.context.classes.inner = "";

        return () => {
            return h(FormItem, {
                context: props.context
            },
                [
                    h(Slider, {
                        context: props.context,
                        ...props.context.attrs
                    })
                ]
            )
        }
    }
});