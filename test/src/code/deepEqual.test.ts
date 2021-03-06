import { deepEqual } from '../../../src/indexForTest'

describe('deep equal', (): void => {
    it('works', (): void => {
        expect(deepEqual('a', 'a'))
            .toBe(true)
        expect(deepEqual('a', 'b'))
            .toBe(false)
        expect(deepEqual(2, 2))
            .toBe(true)
        expect(deepEqual(2, 3))
            .toBe(false)
        expect(deepEqual([ 1, 2, 3 ], [ 1, 2, 3 ]))
            .toBe(true)
        expect(deepEqual([ 1, 2, 3 ], [ 1, 3, 3 ]))
            .toBe(false)
        expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }))
            .toBe(true)
        expect(deepEqual({ a: 1, b: 2 }, { a: 2, b: 2 }))
            .toBe(false)
        expect(deepEqual({}, {}))
            .toBe(true)
        expect(deepEqual(undefined, undefined))
            .toBe(true)
        expect(deepEqual(0, undefined))
            .toBe(false)
        expect(deepEqual(undefined, 0))
            .toBe(false)
        expect(deepEqual('1', 1))
            .toBe(false)
        expect(deepEqual(1, '1'))
            .toBe(false)
        expect(deepEqual([ 1, 2, 3 ], '[ 1, 2, 3 ]'))
            .toBe(false)
        expect(deepEqual('[ 1, 2, 3 ]', [ 1, 2, 3 ]))
            .toBe(false)
        expect(deepEqual({ a: 1, b: 2 }, '{ a: 1, b: 2}'))
            .toBe(false)
        expect(deepEqual('{ a: 1, b: 2}', { a: 1, b: 2 }))
            .toBe(false)
        expect(deepEqual({ a: 1, b: 2 }, [ { a: 1, b: 2 } ]))
            .toBe(false)
        expect(deepEqual([ { a: 1, b: 2 } ], { a: 1, b: 2 }))
            .toBe(false)
        expect(deepEqual({ a: [ { b: 1 }, 'c' ], d: '2' }, { a: [ { b: 1 }, 'c' ], d: '2' }))
            .toBe(true)
        expect(deepEqual({ a: [ { b: 1 }, 'c' ], d: '2' }, { a: [ { b: 3 }, 'c' ], d: '2' }))
            .toBe(false)
    })
})
