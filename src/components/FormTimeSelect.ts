
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem.vue';
import TimeSelect from './TimeSelect'

export default defineComponent({
    props: ["context"],
    setup(props) {
        return () => {
            return h(FormItem, {
                context: props.context
            },
                () => h(TimeSelect, {
                    context: props.context,
                    ...props.context.attrs
                })
            )
        }
    }
});