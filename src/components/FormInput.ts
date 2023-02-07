
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem.vue';
import Input from './Input'

export default defineComponent({
    props: ["context"],
    setup(props) {
        return () => {
            return h(FormItem, {
                context: props.context
            },
                () => h(Input, {
                    context: props.context,
                    ...props.context.attrs
                })
            )
        }
    }
});