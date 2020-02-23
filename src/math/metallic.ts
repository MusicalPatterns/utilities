import { as, FOUR, Ordinal, SQUARED, SQUARE_ROOT, TWO, use } from '../nominal'
import { quotient, sum } from './typedOperations'

const computeMetallicMean: (metalIndex: Ordinal) => number =
    (metalIndex: Ordinal): number =>
        quotient(
            sum(
                as.number(metalIndex),
                use.Exponent(
                    sum(
                        use.Power(metalIndex, SQUARED),
                        FOUR,
                    ),
                    SQUARE_ROOT,
                ),
            ),
            TWO,
        )

export {
    computeMetallicMean,
}
