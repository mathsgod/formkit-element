
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem.vue';
import Transfer from './Transfer'

export default defineComponent({
    props: ["context"],
    setup(props, { slots }) {
        props.context.classes.inner = "";


        const getChildren = () => {
            return [h(Transfer, {
                context: {
                    ...props.context,
                    ...{ slots: slots }
                },
                ...props.context.attrs
            })]
        }

        return () => {
            return h(FormItem, {
                context: props.context
            }, getChildren)
        };
    }
});