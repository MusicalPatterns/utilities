import { as, Radians } from '../nominal'

const sine: (radians: Radians) => number =
    (radians: Radians): number =>
        Math.sin(as.number(radians))

const cosine: (radians: Radians) => number =
    (radians: Radians): number =>
        Math.cos(as.number(radians))

const tangent: (radians: Radians) => number =
    (radians: Radians): number =>
        Math.tan(as.number(radians))

export {
    sine,
    cosine,
    tangent,
}
