const arraysHaveNoCommonValues: <ElementType>(...arrays: ElementType[][]) => boolean =
    <ElementType>(...arrays: ElementType[][]): boolean => {
        const seenValues: ElementType[] = []

        let noCommonValues: boolean = true
        arrays.forEach((array: ElementType[]) => {
            array.forEach((value: ElementType) => {
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
