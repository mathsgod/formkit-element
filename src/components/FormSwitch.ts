
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem.vue';
import Switch from './Switch'

export default defineComponent({
    props: ["context"],
    setup(props) {
   
        return () => {
            return h(FormItem, {
                context: props.context
            },
                () => h(Switch, {
                    context: props.context,
                    ...props.context.attrs
                })
            )
        }
    }
});