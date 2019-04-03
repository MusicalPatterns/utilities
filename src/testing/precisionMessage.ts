import { isUndefined } from '../code'

const precisionMessage: (precision?: number) => string =
    (precision?: number): string =>
        isUndefined(precision) ? '' : `, with precision ${precision}`

export {
    precisionMessage,
}
