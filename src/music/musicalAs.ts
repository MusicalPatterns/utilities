// tslint:disable variable-name

import { NoUnits } from '../nominal'
import { Duration, Intensity, Pitch, Position } from './types'

const Duration: <NumericType extends NoUnits>(asDuration: NumericType) => Duration =
    <NumericType extends NoUnits>(asDuration: NumericType): Duration =>
        asDuration as unknown as Duration
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
    Duration,
    Pitch,
    Position,
    Intensity,
}
