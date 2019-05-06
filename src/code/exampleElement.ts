import { ArrayedType, EXAMPLE_ELEMENT_INDEX, use } from '../nominal'

const exampleElement: <ElementType, ArrayType extends ArrayedType<ElementType>>(array: ArrayType) => ElementType =
    <ElementType, ArrayType extends ArrayedType<ElementType>>(array: ArrayType): ElementType =>
        use.Ordinal(array, EXAMPLE_ELEMENT_INDEX)

export {
    exampleElement,
}
