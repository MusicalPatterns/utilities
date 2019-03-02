// tslint:disable no-magic-numbers

import { Ordinal, to, Translation } from '../nominal'

const INCLUSIVE: Translation = to.Translation(1)
const EXCLUSIVE: Translation = to.Translation(-1)

const INITIAL: Ordinal = to.Ordinal(0)

export {
    INCLUSIVE,
    EXCLUSIVE,
    INITIAL,
}
