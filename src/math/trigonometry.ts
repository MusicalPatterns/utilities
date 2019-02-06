import { from, Radians } from '../nominal'

const sine: (radians: Radians) => number =
    (radians: Radians): number =>
        Math.sin(from.Radians(radians))

const cosine: (radians: Radians) => number =
    (radians: Radians): number =>
        Math.cos(from.Radians(radians))

const tangent: (radians: Radians) => number =
    (radians: Radians): number =>
        Math.tan(from.Radians(radians))

export {
    sine,
    cosine,
    tangent,
}
