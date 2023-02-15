
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem.vue';
import Slider from './Slider'

export default defineComponent({
    props: ["context"],
    setup(props) {
    
        return () => {
            return h(FormItem, {
                context: props.context
            },
                () => h(Slider, {
                    context: props.context,
                    ...props.context.attrs
                })

            )
        }
    }
});