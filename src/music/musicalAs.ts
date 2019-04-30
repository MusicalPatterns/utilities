// tslint:disable variable-name

import { NoUnits } from '../nominal'
import { Duration, Gain, Intensity, Location, Pitch, Position, Tone, Value } from './types'

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

const Duration: <NumericType extends NoUnits>(asDuration: NumericType) => Duration =
    <NumericType extends NoUnits>(asDuration: NumericType): Duration =>
        asDuration as unknown as Duration
const Tone: <NumericType extends NoUnits>(asTone: NumericType) => Tone =
    <NumericType extends NoUnits>(asTone: NumericType): Tone =>
        asTone as unknown as Tone
const Location: <NumericType extends NoUnits>(asLocation: NumericType) => Location =
    <NumericType extends NoUnits>(asLocation: NumericType): Location =>
        asLocation as unknown as Location
const Gain: <NumericType extends NoUnits>(asGain: NumericType) => Gain =
    <NumericType extends NoUnits>(asGain: NumericType): Gain =>
        asGain as unknown as Gain

export {
    Value,
    Pitch,
    Position,
    Intensity,
    Duration,
    Tone,
    Location,
    Gain,
}
