import { negative } from '../math'
import { apply, from, Ordinal, to } from '../nominal'

const lastElement: <T>(array: T[]) => T =
    <T>(array: T[]): T =>
        apply.Ordinal(array, indexOfLastElement(array))

const indexOfLastElement: <T>(array: T[]) => Ordinal =
    <T>(array: T[]): Ordinal =>
        to.Ordinal(apply.Translation(
            array.length,
            to.Translation(negative(1)),
        ))

const lastCharacter: (str: string) => string =
    (str: string): string =>
        str[ from.Ordinal(indexOfLastCharacter(str)) ]

const indexOfLastCharacter: (str: string) => Ordinal =
    (str: string): Ordinal =>
        to.Ordinal(str.length - 1)

export {
    indexOfLastElement,
    lastElement,
    indexOfLastCharacter,
    lastCharacter,
}
