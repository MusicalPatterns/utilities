import { computeEqualDivisionScalars, testArraysAreClose, to, TRITAVE } from '../../../src/indexForTest'

describe('scalars', () => {
    it('divides the window (octave) into equal divisions', () => {
        testArraysAreClose(
            computeEqualDivisionScalars(to.Denominator(12)),
            [
                1,
                1.05946309436,
                1.12246204831,
                1.189207115,
                1.25992104989,
                1.33483985417,
                1.41421356237,
                1.49830707688,
                1.58740105197,
                1.68179283051,
                1.78179743628,
                1.88774862536,
            ].map(to.Scalar),
        )

        testArraysAreClose(
            computeEqualDivisionScalars(to.Denominator(5)),
            [
                1,
                1.148698355,
                1.31950791077,
                1.51571656651,
                1.74110112659,
            ].map(to.Scalar),
        )
    })

    it('supports other windows besides the octave', () => {
        testArraysAreClose(
            computeEqualDivisionScalars(to.Denominator(13), TRITAVE),
            [
                1,
                1.08818224346,
                1.18414059499,
                1.28856076923,
                1.4021889487,
                1.52583711596,
                1.660388856,
                1.80680567034,
                1.96613384786,
                2.13951194151,
                2.32817890443,
                2.53348294341,
                2.75689115313,
            ].map(to.Scalar),
        )
    })
})
