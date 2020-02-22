// tslint:disable no-any

import { as, Cycle, deepClone, deepCloneObject } from '../../../src/indexForTest'

describe('deep clone', (): void => {
    it('deep clones objects', (): void => {
        const actualClone: any = deepClone({ a: { b: { c: 'cba' } } })
        const expectedClone: any = { a: { b: { c: 'cba' } } }
        expect(actualClone)
            .toEqual(expectedClone)
    })

    it('deep clones arrays', (): void => {
        const actualClone: string[] = deepClone([ 'a', 'b', 'c' ])
        const expectedClone: string[] = [ 'a', 'b', 'c' ]
        expect(actualClone)
            .toEqual(expectedClone)
    })

    it('deep clones immutable objects', (): void => {
        const actualClone: string = deepClone('abcba')
        const expectedClone: string = 'abcba'
        expect(actualClone)
            .toBe(expectedClone)
    })

    it('deep clones arrays which also have properties, such as brands', (): void => {
        const actualClone: Cycle<string> = deepClone(as.Cycle([ 'a', 'b', 'c' ]))
        const expectedClone: Cycle<string> = as.Cycle([ 'a', 'b', 'c' ])
        expect(actualClone)
            .toEqual(expectedClone)
    })
})

describe('deep clone object', (): void => {
    let actualObject: any
    let originalObject: any
    beforeEach((): void => {
        const anImmutableString: string = 'a string'
        const anImmutableNumber: number = 9
        const anImmutableFunction: (p: number) => number = (p: number): number => p * 3
        const anUndefinedValue: unknown = undefined
        const originalArray: any[] = [ 'a', 2, { what: 'ever' } ]
        const originalDeepObject: { deeperSetting: string } = { deeperSetting: 'cool beans' }
        const originalShallowObject: { deepObject: { deeperSetting: string } } = { deepObject: originalDeepObject }
        originalObject = {
            anArray: originalArray,
            anImmutableFunction,
            anImmutableNumber,
            anImmutableString,
            anUndefinedValue,
            shallowObject: originalShallowObject,
        }

        actualObject = deepCloneObject(originalObject)
    })

    it('deep clones setting, including strings', (): void => {
        expect(actualObject.anImmutableString)
            .toBe(originalObject.anImmutableString)
    })

    it('deep clones setting, including numbers', (): void => {
        expect(actualObject.anImmutableNumber)
            .toBe(originalObject.anImmutableNumber)
    })

    it('deep clones setting, including functions', (): void => {
        expect(actualObject.anImmutableFunction)
            .toBe(originalObject.anImmutableFunction)
    })

    it('deep clones setting, including undefined values', (): void => {
        expect(actualObject.anUndefinedValue)
            .toBeUndefined()
    })

    it('deep clones setting, including arrays', (): void => {
        expect(actualObject.anArray)
            .not
            .toBe(originalObject.anArray)
        expect(actualObject.anArray)
            .toEqual(originalObject.anArray)
    })

    it('deep clones setting, including shallow setting', (): void => {
        expect(actualObject.shallowObject)
            .not
            .toBe(originalObject.shallowObject)
        expect(actualObject.shallowObject)
            .toEqual(originalObject.shallowObject)
    })

    it('deep clones setting, including deeply nested setting', (): void => {
        expect(actualObject.shallowObject.deepObject)
            .not
            .toBe(originalObject.shallowObject.deepObject)
        expect(actualObject.shallowObject.deepObject)
            .toEqual(originalObject.shallowObject.deepObject)
    })

    it('does not modify the cloned object', (): void => {
        expect(actualObject)
            .toEqual(originalObject)
    })

    it('does not point to the cloned object', (): void => {
        expect(actualObject)
            .not
            .toBe(originalObject)
    })
})
