
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem.vue';
import RadioGroup from './RadioGroup'

export default defineComponent({
    props: ["context"],
    setup(props) {
        props.context.classes.inner = "";

        return () => {
            return h(FormItem, {
                context: props.context
            },
                [
                    h(RadioGroup, {
                        context: props.context,
                        ...props.context.attrs
                    })
                ]
            )
        }
    }
});