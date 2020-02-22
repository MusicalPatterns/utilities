const arraysHaveNoCommonValues: <ElementType>(...arrays: ElementType[][]) => boolean =
    <ElementType>(...arrays: ElementType[][]): boolean => {
        const seenValues: ElementType[] = []

        let noCommonValues: boolean = true
        arrays.forEach((array: ElementType[]): void => {
            array.forEach((value: ElementType): void => {
                if (seenValues.includes(value)) {
                    noCommonValues = false
                }
                seenValues.push(value)
            })
        })

        return noCommonValues
    }

export {
    arraysHaveNoCommonValues,
}
