// tslint:disable-next-line ban-types
type DomValue<T extends string = string, U extends Number = Number> = T | U

type DomValueOrChecked = DomValue | boolean

export {
    DomValue,
    DomValueOrChecked,
}
