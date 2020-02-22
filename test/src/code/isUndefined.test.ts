import { isUndefined, Maybe } from '../../../src/indexForTest'

describe('is undefined', (): void => {
    it('returns false if defined', (): void => {
        expect(isUndefined('pants'))
            .toBe(false)
    })

    it('even returns false if it is defined as false; that is the whole point of this thing', (): void => {
        expect(isUndefined(false))
            .toBe(false)
    })

    it('even returns false if it is defined as 0; that is the whole point of this thing', (): void => {
        expect(isUndefined(0))
            .toBe(false)
    })

    it('returns true if it is not defined', (): void => {
        expect(isUndefined(undefined))
            .toBe(true)
    })

    it('works as a type guard', (): void => {
        let value: Maybe<number>
        if (Math.random() > 0.5) {
            value = 3
        }

        if (isUndefined(value)) {
            return
        }
        // tslint:disable-next-line no-dead-store
        const definitelyValue: number = value
    })
})
