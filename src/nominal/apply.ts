// tslint:disable variable-name no-any

import * as from from './from'
import * as to from './to'
import { Base, Cardinal, Cycle, Modulus, Ordinal, Power, Scalar, Translation } from './types'

const isCycle: (value: any) => value is Cycle<any> =
    (value: any): value is Cycle<any> =>
        // tslint:disable-next-line strict-type-predicates
        (value as Cycle<any>)._CycleBrand !== undefined

const wrapWithin: <T>(n: T, within: number) => T =
    <T>(n: T, within: number): T => {
        // @ts-ignore
        let newN: number = n as number

        while (newN < 0) {
            newN += within
        }
        while (newN >= within) {
            newN -= within
        }

        // @ts-ignore
        return newN as T
    }

const Cardinal: <T>(value: T, cardinal: Cardinal) => T =
    <T>(value: T, cardinal: Cardinal): T =>
        value as any as number * from.Cardinal(cardinal) as any as T

const Base: <T>(value: T, base: Base) => T =
    <T>(value: T, base: Base): T =>
        Math.log(value as any as number) / Math.log(from.Base(base)) as any as T

const Translation: <T>(value: T, translation: Translation) => T =
    <T>(value: T, translation: Translation): T => {
        if (isCycle(value)) {
            const cycle: Cycle<T> = value as any as Cycle<T>
            const cycledCycle: Cycle<T> = to.Cycle([])
            const cellCount: Cardinal = to.Cardinal(cycle.length)

            for (
                let index: Ordinal = to.Ordinal(0);
                index < to.Ordinal(from.Cardinal(cellCount));
                index = Translation(index, to.Translation(1))
            ) {
                let cycledIndex: Ordinal = Translation(index, translation)
                cycledIndex = to.Ordinal(wrapWithin(from.Ordinal(cycledIndex), from.Cardinal(cellCount)))
                cycledCycle.push(cycle[ from.Ordinal(cycledIndex) ])
            }

            return cycledCycle as any
        }

        return value as any as number + from.Translation(translation) as any as T
    }

const Power: <T>(base: T, power: Power) => T =
    <T>(base: T, power: Power): T =>
        Math.pow(base as any as number, from.Power(power)) as any as T

const Scalar: <T>(value: T, scalar: Scalar) => T =
    <T>(value: T, scalar: Scalar): T =>
        value as any as number * from.Scalar(scalar) as any as T

const Ordinal: <T>(array: T[] | Cycle<T>, ordinal: Ordinal) => T =
    <T>(array: T[] | Cycle<T>, ordinal: Ordinal): T => {
        // tslint:disable-next-line strict-type-predicates
        if (isCycle(array)) {
            const cycledIndex: Ordinal = wrapWithin(ordinal, array.length)

            return array[ from.Ordinal(cycledIndex) ]
        }

        return array[ from.Ordinal(ordinal) ]
    }

const Modulus: <T>(value: T, modulus: Modulus) => T =
    <T>(value: T, modulus: Modulus): T =>
        value as any as number % from.Modulus(modulus) as any as T

export {
    Cardinal,
    Base,
    Translation,
    Power,
    Scalar,
    Ordinal,
    Modulus,
}
