import { negative } from '../math'
import { apply, Ordinal, to } from '../nominal'

const lastElement: <T>(array: T[]) => T =
    <T>(array: T[]): T =>
        apply.Ordinal(array, indexOfLastElement(array))

const indexOfLastElement: <T>(array: T[]) => Ordinal =
    <T>(array: T[]): Ordinal =>
        to.Ordinal(apply.Translation(
            array.length,
            to.Translation(negative(1)),
        ))

export {
    indexOfLastElement,
    lastElement,
}
