
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem.vue';
import Textarea from './Textarea'

export default defineComponent({
    props: ["context"],
    setup(props) {
        props.context.classes.inner = "";

        return () => {
            return h(FormItem, {
                context: props.context
            },
                () => h(Textarea, {
                    context: props.context,
                    ...props.context.attrs
                })
            )
        }
    }
});