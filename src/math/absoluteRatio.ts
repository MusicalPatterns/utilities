import { reciprocal } from './typedOperations'

const absoluteRatio: (ratio: number) => number =
    (ratio: number): number => ratio < 1 ? ratio : reciprocal(ratio)

export {
    absoluteRatio,
}
