const isEmpty: <ElementType>(array: ElementType[]) => boolean =
    <ElementType>(array: ElementType[]): boolean =>
        array.length === 0

const isSingleton: <ElementType>(array: ElementType[]) => boolean =
    <ElementType>(array: ElementType[]): boolean =>
        array.length === 1

export {
    isEmpty,
    isSingleton,
}
