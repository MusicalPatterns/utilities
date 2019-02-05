import { apply, to } from '../nominal'

const random: (within?: number) => number =
    (within: number = 1): number =>
        apply.Scalar(Math.random(), to.Scalar(within))

export {
    random,
}
