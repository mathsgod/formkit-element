
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem.vue';
import InputNumber from './InputNumber'

export default defineComponent({
    props: ["context"],
    setup(props) {

        return () => {
            return h(FormItem, {
                context: props.context
            },
                () => h(InputNumber, {
                    context: props.context,
                    ...props.context.attrs
                })

            )
        }
    }
});