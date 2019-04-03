// tslint:disable no-magic-numbers

import { Ordinal, to, Translation } from '../nominal'

const INCLUSIVE: Translation = to.Translation(1)
const EXCLUSIVE: Translation = to.Translation(-1)
const INCLUSIVE_TO_LEFT: Translation = to.Translation(-1)
const EXCLUSIVE_TO_LEFT: Translation = to.Translation(1)

const INITIAL: Ordinal = to.Ordinal(0)
const SKIP_FIRST_ELEMENT: Ordinal = to.Ordinal(1)

const TRANSLATION_FROM_LENGTH_TO_FINAL_INDEX: Translation = to.Translation(-1)
const EXAMPLE_ELEMENT_INDEX: Ordinal = to.Ordinal(0)

const NOT_FOUND: Ordinal = to.Ordinal(-1)

export {
    INCLUSIVE,
    EXCLUSIVE,
    INITIAL,
    SKIP_FIRST_ELEMENT,
    INCLUSIVE_TO_LEFT,
    EXCLUSIVE_TO_LEFT,
    TRANSLATION_FROM_LENGTH_TO_FINAL_INDEX,
    EXAMPLE_ELEMENT_INDEX,
    NOT_FOUND,
}
