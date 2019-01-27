// tslint:disable:variable-name

import * as from from './from'
import { Base, Count, Index, Offset, Power, Scalar } from './types'

const Count: <T>(value: T, count: Count) => T =
    <T>(value: T, count: Count): T =>
        // @ts-ignore
        value * from.Count(count) as T

const Base: <T>(value: T, base: Base) => T =
    <T>(value: T, base: Base): T =>
        // @ts-ignore
        Math.log(value) / Math.log(base) as T

const Offset: <T>(value: T, offsetAmount: Offset) => T =
    <T>(value: T, offsetAmount: Offset): T =>
        // @ts-ignore
        value + from.Offset(offsetAmount) as T

const Power: <T>(base: T, power: Power) => T =
    <T>(base: T, power: Power): T =>
        // @ts-ignore
        Math.pow(base, from.Power(power)) as T

const Scalar: <T>(value: T, scalar: Scalar) => T =
    <T>(value: T, scalar: Scalar): T =>
        // @ts-ignore
        value * from.Scalar(scalar) as T

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
