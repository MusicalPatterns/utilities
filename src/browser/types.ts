import { Maybe } from '../code'

type HtmlValue = Maybe<string | number | string[]>

type HtmlValueOrChecked = HtmlValue | boolean

export {
    HtmlValue,
    HtmlValueOrChecked,
}
