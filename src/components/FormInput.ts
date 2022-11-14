
import { ElFormItem } from 'element-plus';
import { defineComponent, h, ref } from 'vue'
import Input from './Input'

export default defineComponent({
    props: ["context"],
    setup(props) {
        props.context.classes.inner = "";
        let error = ref<any>(null);

        function showErrorMessage() {
            let messagesArray: any = Object.entries(props.context.messages);
            error.value = (messagesArray.length > 0) ? messagesArray[0][1].value : null
        }

        props.context.node.on("message-added", showErrorMessage)
        props.context.node.on("message-updated", showErrorMessage)
        props.context.node.on("message-removed", showErrorMessage)

        let required = props.context.node.props.parsedRules.some((rule: any) => {
            if (rule.name === "required") {
                return true;
            }
        });

        return () => {
            return h(ElFormItem, {
                label: props.context.label,
                required: required,
                error: error.value,
            },
                [
                    h(Input, {
                        context: props.context,
                        ...props.context.attrs
                    })
                ]
            )
        }
    }
});