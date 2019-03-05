type DomValue<T extends string = string, U extends number = number> = T | U

type DomValueOrChecked = DomValue | boolean

export {
    DomValue,
    DomValueOrChecked,
}
