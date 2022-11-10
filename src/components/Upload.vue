<script>
import { defineComponent, h } from 'vue'
import { ElUpload } from 'element-plus';
export default defineComponent({
    props: ["context"],
    render(props) {
        return h(ElUpload, {
            autoUpload: false,
            "modelValue:fileList": props.context.node.value,
            "onUpdate:fileList": (val) => {
                props.context.node.input(val);
            },
            ...props.context.attrs
        }, props.context.slots?.default())
    },
    setup(props) {
        props.context.classes.inner = "";
    },

})
</script>