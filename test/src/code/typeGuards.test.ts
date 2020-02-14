// tslint:disable no-dead-store

import { Cardinal, isUndefined } from '../../../src/indexForTest'

describe('type guards', () => {
    describe('isUndefined', () => {
        it('works with Cardinals', () => {
            const maybeCardinal: Cardinal | undefined = undefined

            if (!isUndefined(maybeCardinal)) {
                const justCardinal: Cardinal = maybeCardinal
            }

            const maybeArgumentFunction: (optionalCardinal: Cardinal | undefined) => void =
                (optionalCardinal: Cardinal | undefined): void => {
                    if (!isUndefined(optionalCardinal)) {
                        const justCardinal: Cardinal = optionalCardinal
                    }
                }

            const optionalArgumentFunction: (optionalCardinal?: Cardinal) => void =
                (optionalCardinal?: Cardinal): void => {
                    if (!isUndefined(optionalCardinal)) {
                        const justCardinal: Cardinal = optionalCardinal
                    }
                }

            const optionalObjectArgumentFunction: (args: { optionalCardinal?: Cardinal }) => void =
                ({ optionalCardinal }: { optionalCardinal?: Cardinal }): void => {
                    if (!isUndefined(optionalCardinal)) {
                        const justCardinal: Cardinal = optionalCardinal
                    }
                }
        })

        it('does not report empty strings as undefined', () => {
            expect(isUndefined(''))
                .toBe(false)
        })
    })
})
