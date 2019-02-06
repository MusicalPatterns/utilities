import { negative } from '../math'
import { apply, to } from '../nominal'

const lastElement: <T>(array: T[]) => T =
    <T>(array: T[]): T =>
        apply.Ordinal(
            array,
            to.Ordinal(apply.Translation(
                array.length,
                to.Translation(negative(1)),
            )),
        )

export {
    lastElement,
}
