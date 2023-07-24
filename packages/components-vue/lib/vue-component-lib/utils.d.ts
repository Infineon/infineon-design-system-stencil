export interface InputProps<T> {
    modelValue?: T;
}
export declare const defineContainer: <Props, VModelType = string | number | boolean>(name: string, defineCustomElement: any, componentProps?: string[], modelProp?: string, modelUpdateEvent?: string, externalModelUpdateEvent?: string) => (props: Props & InputProps<VModelType> & {}) => any;
