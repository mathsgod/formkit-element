
import { Component, defineComponent, h, ref } from 'vue'
import FormItem from './FormItem.vue';
import { FormKitTypeDefinition } from '@formkit/core';
export default (component: Component, definitionOptions?: Partial<FormKitTypeDefinition>): FormKitTypeDefinition => {
    return {
        type: "input",
        props: ["labelWidth", "labelPosition", ...definitionOptions?.props ?? []],
        component: defineComponent({
            props: ["context"],
            setup(props, { slots }) {

                return () => {
                    return h(FormItem, {
                        context: props.context
                    }, () => h(component, {
                        context: {
                            ...props.context,
                            ...{ slots: slots }
                        },
                        ...props.context.attrs
                    }))
                }
            }
        })
    }
};