import { notAs, Radians } from '../nominal'

const sine: (radians: Radians) => number =
    (radians: Radians): number =>
        Math.sin(notAs.Radians(radians))

const cosine: (radians: Radians) => number =
    (radians: Radians): number =>
        Math.cos(notAs.Radians(radians))

const tangent: (radians: Radians) => number =
    (radians: Radians): number =>
        Math.tan(notAs.Radians(radians))

export {
    sine,
    cosine,
    tangent,
}
