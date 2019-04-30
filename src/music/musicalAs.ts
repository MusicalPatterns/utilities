// tslint:disable variable-name

import { NoUnits } from '../nominal'
import { Intensity, Pitch, Position, Value } from './types'

const Value: <NumericType extends NoUnits>(asValue: NumericType) => Value =
    <NumericType extends NoUnits>(asValue: NumericType): Value =>
        asValue as unknown as Value
const Pitch: <NumericType extends NoUnits>(asPitch: NumericType) => Pitch =
    <NumericType extends NoUnits>(asPitch: NumericType): Pitch =>
        asPitch as unknown as Pitch
const Position: <NumericType extends NoUnits>(asPosition: NumericType) => Position =
    <NumericType extends NoUnits>(asPosition: NumericType): Position =>
        asPosition as unknown as Position
const Intensity: <NumericType extends NoUnits>(asIntensity: NumericType) => Intensity =
    <NumericType extends NoUnits>(asIntensity: NumericType): Intensity =>
        asIntensity as unknown as Intensity

export {
    Value,
    Pitch,
    Position,
    Intensity,
}
