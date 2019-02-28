import {
    combinationCount,
    factorial,
    quarterSquareNumber,
    termialRoot,
    trapezoidalNumber,
    triangularNumber,
    triangularRoot,
} from '../../../src/indexForTest'

describe('special numbers', () => {
    describe('factorial', () => {
        it('works', () => {
            expect(factorial(0))
                .toBe(1)
            expect(factorial(1))
                .toBe(1)
            expect(factorial(2))
                .toBe(2)
            expect(factorial(3))
                .toBe(6)
            expect(factorial(4))
                .toBe(24)
            expect(factorial(5))
                .toBe(120)
        })
    })

    describe('combination count', () => {
        it('works when you choose 1', () => {
            expect(combinationCount(1, 1))
                .toBe(1)
            expect(combinationCount(2, 1))
                .toBe(2)
            expect(combinationCount(3, 1))
                .toBe(3)
        })

        it('works when you choose 2', () => {
            expect(combinationCount(2, 2))
                .toBe(1)
            expect(combinationCount(3, 2))
                .toBe(3)
            expect(combinationCount(4, 2))
                .toBe(6)
        })

        it('works when you choose 3', () => {
            expect(combinationCount(3, 3))
                .toBe(1)
            expect(combinationCount(4, 3))
                .toBe(4)
            expect(combinationCount(5, 3))
                .toBe(10)
        })

        it('works when you choose 0', () => {
            expect(combinationCount(3, 0))
                .toBe(1)
            expect(combinationCount(4, 0))
                .toBe(1)
            expect(combinationCount(5, 0))
                .toBe(1)
        })

        it('throws when you choose greater than value', () => {
            expect(() => combinationCount(3, 4))
                .toThrow(new Error('You cannot choose more objects than you have.'))
        })

        it('throws when you choose less than 0', () => {
            expect(() => combinationCount(3, -1))
                .toThrow(new Error('You cannot choose fewer objects than none.'))
        })
    })

    describe('triangular number', () => {
        it('returns the triangular number for value', () => {
            expect(triangularNumber(0))
                .toBe(0)
            expect(triangularNumber(1))
                .toBe(1)
            expect(triangularNumber(2))
                .toBe(3)
            expect(triangularNumber(3))
                .toBe(6)
            expect(triangularNumber(4))
                .toBe(10)
            expect(triangularNumber(5))
                .toBe(15)
            expect(triangularNumber(6))
                .toBe(21)
        })

        it('returns numbers in-between triangular numbers', () => {
            expect(triangularNumber(0.5))
                .toBe((Math.pow(2, 2) - 1) / 8)
            expect(triangularNumber(1.5))
                .toBe((Math.pow(4, 2) - 1) / 8)
            expect(triangularNumber(2.5))
                .toBe((Math.pow(6, 2) - 1) / 8)
        })

        it('is the reciprocal of triangular root', () => {
            expect(triangularNumber(triangularRoot(5)))
                .toBe(5)
        })
    })

    describe('triangular root', () => {
        it('given a triangular number, returns its value', () => {
            expect(triangularRoot(0))
                .toBe(0)
            expect(triangularRoot(1))
                .toBe(1)
            expect(triangularRoot(3))
                .toBe(2)
            expect(triangularRoot(6))
                .toBe(3)
            expect(triangularRoot(10))
                .toBe(4)
            expect(triangularRoot(15))
                .toBe(5)
            expect(triangularRoot(21))
                .toBe(6)
        })

        it('returns numbers in-between triangular roots', () => {
            expect(triangularRoot(0.5))
                .toBe(0.6180339887498949)
            expect(triangularRoot(2))
                .toBe(1.5615528128088303)
            expect(triangularRoot(4.5))
                .toBe(2.5413812651491097)
        })

        it('is the reciprocal of triangular number', () => {
            expect(triangularRoot(triangularNumber(5)))
                .toBe(5)
        })
    })

    describe('quarter square number', () => {
        it('gives the nth entry in the sequence of numbers where you sum 1 to the amount you increase by each step every other step', () => {
            let delta: number = 0
            let memo: number = 0
            expect(quarterSquareNumber(0))
                .toBe(memo) // 0

            memo += delta
            expect(quarterSquareNumber(1))
                .toBe(memo) // 0
            delta += 1
            memo += delta
            expect(quarterSquareNumber(2))
                .toBe(memo) // 1

            memo += delta
            expect(quarterSquareNumber(3))
                .toBe(memo) // 2
            delta += 1
            memo += delta
            expect(quarterSquareNumber(4))
                .toBe(memo) // 4

            memo += delta
            expect(quarterSquareNumber(5))
                .toBe(memo) // 6
            delta += 1
            memo += delta
            expect(quarterSquareNumber(6))
                .toBe(memo) // 9

            memo += delta
            expect(quarterSquareNumber(7))
                .toBe(memo) // 12
            delta += 1
            memo += delta
            expect(quarterSquareNumber(8))
                .toBe(memo) // 16
        })
    })

    describe('trapezoidal number', () => {
        it('gives the difference between two triangular numbers', () => {
            expect(trapezoidalNumber({ start: 0, height: 0 }))
                .toBe(0)
            expect(trapezoidalNumber({ start: 0, height: 1 }))
                .toBe(1)
            expect(trapezoidalNumber({ start: 0, height: 2 }))
                .toBe(3)
            expect(trapezoidalNumber({ start: 0, height: 3 }))
                .toBe(6)
            expect(trapezoidalNumber({ start: 0, height: 4 }))
                .toBe(10)

            expect(trapezoidalNumber({ start: 1, height: 0 }))
                .toBe(0)
            expect(trapezoidalNumber({ start: 1, height: 1 }))
                .toBe(2)
            expect(trapezoidalNumber({ start: 1, height: 2 }))
                .toBe(5)
            expect(trapezoidalNumber({ start: 1, height: 3 }))
                .toBe(9)
            expect(trapezoidalNumber({ start: 1, height: 4 }))
                .toBe(14)

            expect(trapezoidalNumber({ start: 2, height: 0 }))
                .toBe(0)
            expect(trapezoidalNumber({ start: 2, height: 1 }))
                .toBe(3)
            expect(trapezoidalNumber({ start: 2, height: 2 }))
                .toBe(7)
            expect(trapezoidalNumber({ start: 2, height: 3 }))
                .toBe(12)
            expect(trapezoidalNumber({ start: 2, height: 4 }))
                .toBe(18)

            expect(trapezoidalNumber({ start: 3, height: 0 }))
                .toBe(0)
            expect(trapezoidalNumber({ start: 3, height: 1 }))
                .toBe(4)
            expect(trapezoidalNumber({ start: 3, height: 2 }))
                .toBe(9)
            expect(trapezoidalNumber({ start: 3, height: 3 }))
                .toBe(15)
            expect(trapezoidalNumber({ start: 3, height: 4 }))
                .toBe(22)

            expect(trapezoidalNumber({ start: 4, height: 0 }))
                .toBe(0)
            expect(trapezoidalNumber({ start: 4, height: 1 }))
                .toBe(5)
            expect(trapezoidalNumber({ start: 4, height: 2 }))
                .toBe(11)
            expect(trapezoidalNumber({ start: 4, height: 3 }))
                .toBe(18)
            expect(trapezoidalNumber({ start: 4, height: 4 }))
                .toBe(26)
        })
    })

    describe('termial root', () => {
        // tslint:disable-next-line max-line-length
        it('for a concrete example of what you can use this method for: given an starting stripe count per tile, the increase in stripe count per next tile, and a stripe number, it will return which tile that stripe passes through, including the fractional part within that tile', () => {
            let rangeStart: number
            let rangeDelta: number

            rangeStart = 1
            rangeDelta = 1
            expect(termialRoot({ rangeStart, rangeDelta, value: 0 }))
                .toBe(0)
            expect(termialRoot({ rangeStart, rangeDelta, value: 1 }))
                .toBe(1)
            expect(termialRoot({ rangeStart, rangeDelta, value: 3 }))
                .toBe(2)
            expect(termialRoot({ rangeStart, rangeDelta, value: 6 }))
                .toBe(3)
            expect(termialRoot({ rangeStart, rangeDelta, value: 10 }))
                .toBe(4)

            rangeStart = 2
            rangeDelta = 1
            expect(termialRoot({ rangeStart, rangeDelta, value: 0 }))
                .toBe(0)
            expect(termialRoot({ rangeStart, rangeDelta, value: 2 }))
                .toBe(1)
            expect(termialRoot({ rangeStart, rangeDelta, value: 5 }))
                .toBe(2)
            expect(termialRoot({ rangeStart, rangeDelta, value: 9 }))
                .toBe(3)
            expect(termialRoot({ rangeStart, rangeDelta, value: 14 }))
                .toBe(4)

            rangeStart = 1
            rangeDelta = 2
            expect(termialRoot({ rangeStart, rangeDelta, value: 0 }))
                .toBe(0)
            expect(termialRoot({ rangeStart, rangeDelta, value: 1 }))
                .toBe(1)
            expect(termialRoot({ rangeStart, rangeDelta, value: 4 }))
                .toBe(2)
            expect(termialRoot({ rangeStart, rangeDelta, value: 9 }))
                .toBe(3)
            expect(termialRoot({ rangeStart, rangeDelta, value: 16 }))
                .toBe(4)

            rangeStart = 2
            rangeDelta = 2
            expect(termialRoot({ rangeStart, rangeDelta, value: 0 }))
                .toBe(0)
            expect(termialRoot({ rangeStart, rangeDelta, value: 2 }))
                .toBe(1)
            expect(termialRoot({ rangeStart, rangeDelta, value: 6 }))
                .toBe(2)
            expect(termialRoot({ rangeStart, rangeDelta, value: 12 }))
                .toBe(3)
            expect(termialRoot({ rangeStart, rangeDelta, value: 20 }))
                .toBe(4)
        })
    })
})
