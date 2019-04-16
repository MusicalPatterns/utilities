import { isGreaterThanOrEqualTo, isLessThanOrEqualTo, isUndefined } from '../code'

const inBounds: <NumericElementType extends Number>(
    array: NumericElementType[],
    lowerBound?: NumericElementType,
    upperBound?: NumericElementType,
    precision?: number,
) => boolean =
    <NumericElementType extends Number>(
        array: NumericElementType[],
        lowerBound?: NumericElementType,
        upperBound?: NumericElementType,
        precision?: number,
    ): boolean =>
        array.every((element: NumericElementType) => {
            const okayByUpperBound: boolean = isUndefined(upperBound) ?
                true :
                isLessThanOrEqualTo(element, upperBound, precision)
            const okayByLowerBound: boolean = isUndefined(lowerBound) ?
                true :
                isGreaterThanOrEqualTo(element, lowerBound, precision)

            return okayByUpperBound && okayByLowerBound
        })

export {

    inBounds,
}
