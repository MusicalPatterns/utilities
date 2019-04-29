// tslint:disable variable-name

import { NoUnits } from '../nominal'
import { Duration, Pitch, Position } from './types'

const Duration: <NumericType extends NoUnits>(duration: NumericType) => Duration =
    <NumericType extends NoUnits>(duration: NumericType): Duration =>
        duration as unknown as Duration
const Pitch: <NumericType extends NoUnits>(pitch: NumericType) => Pitch =
    <NumericType extends NoUnits>(pitch: NumericType): Pitch =>
        pitch as unknown as Pitch
const Position: <NumericType extends NoUnits>(position: NumericType) => Position =
    <NumericType extends NoUnits>(position: NumericType): Position =>
        position as unknown as Position

export {
    Duration,
    Pitch,
    Position,
}
