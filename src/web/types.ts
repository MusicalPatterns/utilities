import { Maybe } from '../code'

type DomValue = Maybe<string | number | string[]>

type DomValueOrChecked = DomValue | boolean

export {
    DomValue,
    DomValueOrChecked,
}
