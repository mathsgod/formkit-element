
import { defineComponent, h } from 'vue'
import FormItem from './FormItem.vue';
import ColorPicker from './ColorPicker'

export default defineComponent({
    props: ["context"],
    setup(props) {

        return () => {
            return h(FormItem, {
                context: props.context
            },
                () => h(ColorPicker, {
                    context: props.context,
                    ...props.context.attrs
                })
            )
        }
    }
});