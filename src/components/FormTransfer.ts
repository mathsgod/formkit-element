
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem.vue';
import Transfer from './Transfer'

export default defineComponent({
    props: ["context"],
    setup(props, { slots }) {
        return () => {
            return h(FormItem, {
                context: props.context
            }, () => {
                return [h(Transfer, {
                    context: {
                        ...props.context,
                        ...{ slots: slots }
                    },
                    ...props.context.attrs
                })]
            })
        };
    }
});