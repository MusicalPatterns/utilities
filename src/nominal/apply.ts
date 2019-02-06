// tslint:disable variable-name no-any

import * as from from './from'
import { Base, Cardinal, Ordinal, Power, Scalar, Translation } from './types'

const Cardinal: <T>(value: T, cardinal: Cardinal) => T =
    <T>(value: T, cardinal: Cardinal): T =>
        value as any as number * from.Cardinal(cardinal) as any as T

const Base: <T>(value: T, base: Base) => T =
    <T>(value: T, base: Base): T =>
        Math.log(value as any as number) / Math.log(from.Base(base)) as any as T

const Translation: <T>(value: T, translation: Translation) => T =
    <T>(value: T, translation: Translation): T =>
        value as any as number + from.Translation(translation) as any as T

const Power: <T>(base: T, power: Power) => T =
    <T>(base: T, power: Power): T =>
        Math.pow(base as any as number, from.Power(power)) as any as T

const Scalar: <T>(value: T, scalar: Scalar) => T =
    <T>(value: T, scalar: Scalar): T =>
        value as any as number * from.Scalar(scalar) as any as T

const Ordinal: <T>(array: T[], ordinal: Ordinal) => T =
    <T>(array: T[], ordinal: Ordinal): T =>
        array[ from.Ordinal(ordinal) ]

export {
    Cardinal,
    Base,
    Translation,
    Power,
    Scalar,
    Ordinal,
}
