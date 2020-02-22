import { as, Integer, Whole } from '../nominal'
import { isUndefined } from './typeGuards'

const range: <WholeType extends Whole = Integer, AnotherWholeType extends Whole = Integer>(
    firstParameter: WholeType,
    secondParameter?: AnotherWholeType,
) => Integer[] =
    <WholeType extends Whole = Integer, AnotherWholeType extends Whole = Integer>(
        firstParameter: WholeType,
        secondParameter?: AnotherWholeType,
    ): Integer[] => {
        if (isUndefined(secondParameter)) {
            return [
                ...Array(firstParameter)
                    .keys(),
            ].map(as.Integer)
        }

        return [
            ...Array(as.number(secondParameter) - as.number(firstParameter))
                .keys(),
        ]
            .map((numeral: number): number => numeral + as.number(firstParameter))
            .map(as.Integer)
    }

export {
    range,
}
