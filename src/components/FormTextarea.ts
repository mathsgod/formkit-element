
import { defineComponent, h, ref } from 'vue'
import FormItem from './FormItem';
import Textarea from './Textarea'

export default defineComponent({
    props: ["context"],
    setup(props) {
        props.context.classes.inner = "";

        return () => {
            return h(FormItem, {
                context: props.context
            },
                {
                    default() {
                        return [
                            h(Textarea, {
                                context: props.context,
                                ...props.context.attrs
                            })
                        ]

                    }
                }
            )
        }
    }
});