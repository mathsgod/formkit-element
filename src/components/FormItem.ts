import FormItem from './FormItem.vue';
import { defineComponent, h, ref } from 'vue'

export default defineComponent({
    props: ["context"],
    setup(props, { slots }) {

        return () => {
            return h(FormItem, {
                context: props.context,
            }, slots);

        };
    }
});