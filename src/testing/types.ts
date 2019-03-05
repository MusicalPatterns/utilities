interface ElementWithValue extends Element {
    // tslint:disable-next-line no-any
    value: any,
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
