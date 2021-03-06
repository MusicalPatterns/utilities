import { keyExistsOnObject } from '../../../src/indexForTest'

describe('key exists on object', (): void => {
    it('returns true if the key exists and is defined', (): void => {
        expect(keyExistsOnObject('bob', { jim: 3, bob: 5 }))
            .toBe(true)
    })

    it('returns true if the key exists and is undefined', (): void => {
        expect(keyExistsOnObject('bob', { jim: 3, bob: undefined }))
            .toBe(true)
    })

    it('returns true if the key exists and is null', (): void => {
        // tslint:disable-next-line no-null-keyword
        expect(keyExistsOnObject('bob', { jim: 3, bob: null }))
            .toBe(true)
    })

    it('returns true if the key exists and is 0', (): void => {
        expect(keyExistsOnObject('bob', { jim: 3, bob: 0 }))
            .toBe(true)
    })

    it('returns false if the key does not exist', (): void => {
        expect(keyExistsOnObject('bob', { jim: 3, betty: 5 }))
            .toBe(false)
    })
})
