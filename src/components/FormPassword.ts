
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem.vue';
import Password from './Password'

export default defineComponent({
    props: ["context"],
    setup(props) {

        return () => {
            return h(FormItem, {
                context: props.context
            },
                () => h(Password, {
                    context: props.context,
                    ...props.context.attrs
                })
            )
        }
    }
});