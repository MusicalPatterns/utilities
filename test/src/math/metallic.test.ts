import { as, computeMetallicMean, PHI, VERY_HIGH_PRECISION } from '../../../src/indexForTest'

describe('compute metallic value', (): void => {
    it('gives the correct value of the nth metallic mean', (): void => {
        expect(computeMetallicMean(as.Ordinal(0)))
            .toBeCloseTo(1, VERY_HIGH_PRECISION)
        expect(computeMetallicMean(as.Ordinal(1)))
            .toBeCloseTo(PHI, VERY_HIGH_PRECISION)
        expect(computeMetallicMean(as.Ordinal(2)))
            .toBeCloseTo(2.414213562373095, VERY_HIGH_PRECISION)
        expect(computeMetallicMean(as.Ordinal(3)))
            .toBeCloseTo(3.302775637731995, VERY_HIGH_PRECISION)
        expect(computeMetallicMean(as.Ordinal(4)))
            .toBeCloseTo(4.23606797749979, VERY_HIGH_PRECISION)
        expect(computeMetallicMean(as.Ordinal(5)))
            .toBeCloseTo(5.19258240356725, VERY_HIGH_PRECISION)
        expect(computeMetallicMean(as.Ordinal(6)))
            .toBeCloseTo(6.16227766016838, VERY_HIGH_PRECISION)
        expect(computeMetallicMean(as.Ordinal(7)))
            .toBeCloseTo(7.14005494464026, VERY_HIGH_PRECISION)
        expect(computeMetallicMean(as.Ordinal(8)))
            .toBeCloseTo(8.12310562561766, VERY_HIGH_PRECISION)
    })
})
