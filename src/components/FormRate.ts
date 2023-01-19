
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem.vue';
import Rate from './Rate'

export default defineComponent({
    props: ["context"],
    setup(props) {
        props.context.classes.inner = "";

        return () => {
            return h(FormItem, {
                context: props.context
            },
                () => h(Rate, {
                    context: props.context,
                    ...props.context.attrs
                })
            )
        }
    }
});