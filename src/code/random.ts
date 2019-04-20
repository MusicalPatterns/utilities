import { as, use } from '../nominal'

const random: (within?: number) => number =
    (within: number = 1): number =>
        use.Scalar(Math.random(), as.Scalar(within))

export {
    random,
}
