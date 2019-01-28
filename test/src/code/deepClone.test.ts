// tslint:disable:no-any

import { deepClone, deepCloneObject } from '../../../src/indexForTest'

describe('deep clone', () => {
    it('deep clones objects', () => {
        const actualClone: any = deepClone({ a: { b: { c: 'cba' } } })
        const expectedClone: any = { a: { b: { c: 'cba' } } }
        expect(actualClone)
            .toEqual(expectedClone)
    })

    it('deep clones arrays', () => {
        const actualClone: string[] = deepClone([ 'a', 'b', 'c' ])
        const expectedClone: string[] = [ 'a', 'b', 'c' ]
        expect(actualClone)
            .toEqual(expectedClone)
    })

    it('deep clones immutable objects', () => {
        const actualClone: string = deepClone('abcba')
        const expectedClone: string = 'abcba'
        expect(actualClone)
            .toBe(expectedClone)
    })
})

describe('deep clone object', () => {
    let actualObject: any
    let originalObject: any
    beforeEach(() => {
        const anImmutableString: string = 'a string'
        const anImmutableNumber: number = 9
        const anImmutableFunction: (p: number) => number = (p: number): number => p * 3
        const anUndefinedValue: void = undefined
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

    it('deep clones setting, including strings', () => {
        expect(actualObject.anImmutableString)
            .toBe(originalObject.anImmutableString)
    })

    it('deep clones setting, including numbers', () => {
        expect(actualObject.anImmutableNumber)
            .toBe(originalObject.anImmutableNumber)
    })

    it('deep clones setting, including functions', () => {
        expect(actualObject.anImmutableFunction)
            .toBe(originalObject.anImmutableFunction)
    })

    it('deep clones setting, including undefined values', () => {
        expect(actualObject.anUndefinedValue)
            .toBeUndefined()
    })

    it('deep clones setting, including arrays', () => {
        expect(actualObject.anArray)
            .not
            .toBe(originalObject.anArray)
        expect(actualObject.anArray)
            .toEqual(originalObject.anArray)
    })

    it('deep clones setting, including shallow setting', () => {
        expect(actualObject.shallowObject)
            .not
            .toBe(originalObject.shallowObject)
        expect(actualObject.shallowObject)
            .toEqual(originalObject.shallowObject)
    })

    it('deep clones setting, including deeply nested setting', () => {
        expect(actualObject.shallowObject.deepObject)
            .not
            .toBe(originalObject.shallowObject.deepObject)
        expect(actualObject.shallowObject.deepObject)
            .toEqual(originalObject.shallowObject.deepObject)
    })

    it('does not modify the cloned object', () => {
        expect(actualObject)
            .toEqual(originalObject)
    })

    it('does not point to the cloned object', () => {
        expect(actualObject)
            .not
            .toBe(originalObject)
    })
})
