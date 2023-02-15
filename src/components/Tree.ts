import { ElTree } from 'element-plus';
import { defineComponent, h, computed, ref, watch } from 'vue'

export default defineComponent({
    props: ["context"],
    setup(props) {
        if (props.context.classes.inner == "formkit-inner") {
            props.context.classes.inner = "";
        }

        let tree = ref(null)
        watch(() => props.context.value, (val) => {
            //set checked keys
            (tree as any).value.setCheckedKeys(val);
        });

        return () => {
            return h(ElTree, {
                ref: tree,
                defaultCheckedKeys: props.context.value,
                onCheckChange() {
                    let checkedKeys = (tree as any).value.getCheckedKeys();
                    //filter undefined
                    checkedKeys = checkedKeys.filter((x: any) => x);
                    props.context.node.input(checkedKeys);
                },
                ...props.context.attrs,
                showCheckbox: true
            });
        }
    }
});