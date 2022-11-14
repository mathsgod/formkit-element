import { ElFormItem } from 'element-plus';
import { defineComponent, h, ref } from 'vue'

export default defineComponent({
    props: ["context"],
    setup(props, { slots }) {
        props.context.classes.inner = "";

        let error = ref<any>(null);
        function showErrorMessage() {
            let messagesArray: any = Object.entries(props.context.messages);
            error.value = (messagesArray.length > 0) ? messagesArray[0][1].value : null
        }

        let required = props.context.node.props.parsedRules.some((rule: any) => {
            if (rule.name === "required") {
                return true;
            }
        });

        props.context.node.on("message-added", showErrorMessage)
        props.context.node.on("message-updated", showErrorMessage)
        props.context.node.on("message-removed", showErrorMessage)

        let children: any = [];
        if (slots.default) {
            children = slots.default();
        }

        //<div v-if="context.help" :class="context.classes.help" v-text="context.help" />
        if (props.context.help) {
            children.push(h("div", { class: props.context.classes.help }, props.context.help))
        }

        return () => {
            return h(ElFormItem, {
                label: props.context.label,
                required: required,
                error: error.value,
            }, children);
        }
    }
});