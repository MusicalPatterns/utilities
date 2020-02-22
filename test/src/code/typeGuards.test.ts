// tslint:disable no-dead-store

import { Cardinal, isUndefined } from '../../../src/indexForTest'

describe('type guards', (): void => {
    describe('isUndefined', (): void => {
        it('works with Cardinals', (): void => {
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

        it('does not report empty strings as undefined', (): void => {
            expect(isUndefined(''))
                .toBe(false)
        })
    })
})
