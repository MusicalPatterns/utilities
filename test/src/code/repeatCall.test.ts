import { as, repeatCall } from '../../../src/indexForTest'

describe('repeat call', () => {
    it('concats x copies of the array a function returns together', () => {
        const arrayFunction: () => string[] = (): string[] => [ '0', '1' ]
        expect(repeatCall(arrayFunction, as.Cardinal(3)))
            .toEqual([ '0', '1', '0', '1', '0', '1' ])
    })
})
