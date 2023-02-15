
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem.vue';
import DateRangePicker from './DateRangePicker'

export default defineComponent({
    props: ["context"],
    setup(props) {
        
        return () => {
            return h(FormItem, {
                context: props.context
            },
                () => h(DateRangePicker, {
                    context: props.context,
                    ...props.context.attrs
                })
            )
        }
    }
});