import { round, to } from '../../../src/indexForTest'

describe('typed operations', () => {
    describe('round', () => {
        it('when not given a precision, assumes 0', () => {
            expect(round(to.Scalar(3.5)))
                .toBe(to.Scalar(4))
        })

        it('when given a precision, uses it', () => {
            expect(round(to.Scalar(3.524387), 4))
                .toBe(to.Scalar(3.5244))
        })
    })
})
