// tslint:disable variable-name no-any

import * as from from './from'
import { Base, Count, Index, Offset, Power, Scalar } from './types'

const Count: <T>(value: T, count: Count) => T =
    <T>(value: T, count: Count): T =>
        value as any as number * from.Count(count) as any as T

const Base: <T>(value: T, base: Base) => T =
    <T>(value: T, base: Base): T =>
        Math.log(value as any as number) / Math.log(from.Base(base)) as any as T

const Offset: <T>(value: T, offsetAmount: Offset) => T =
    <T>(value: T, offsetAmount: Offset): T =>
        value as any as number + from.Offset(offsetAmount) as any as T

const Power: <T>(base: T, power: Power) => T =
    <T>(base: T, power: Power): T =>
        Math.pow(base as any as number, from.Power(power)) as any as T

const Scalar: <T>(value: T, scalar: Scalar) => T =
    <T>(value: T, scalar: Scalar): T =>
        value as any as number * from.Scalar(scalar) as any as T

const Index: <T>(array: T[], index: Index) => T =
    <T>(array: T[], index: Index): T =>
        array[ from.Index(index) ]

export {
    Count,
    Base,
    Offset,
    Power,
    Scalar,
    Index,
}
