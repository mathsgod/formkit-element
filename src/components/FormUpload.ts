
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem.vue';
import Upload from './Upload'

export default defineComponent({
    props: ["context"],
    setup(props, { slots }) {
        props.context.classes.inner = "";

        let children: any = [];;
        if (slots) {
            children = slots.default?.() ?? [];
        }

        return () => {
            return h(FormItem, {
                context: props.context
            },
                () => h(Upload, {
                    style: {
                        width: "100%"
                    },
                    context: props.context,
                    ...props.context.attrs
                }, children)

            )
        }
    }
});