import { DomValue } from '../web'

interface ElementWithValue extends Element {
    value: DomValue,
}

interface ElementWithInnerText extends Element {
    innerText: string,
}

interface ElementWithChecked extends Element {
    checked: boolean,
}

export {
    ElementWithValue,
    ElementWithInnerText,
    ElementWithChecked,
}
