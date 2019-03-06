import { NominalNumber } from '../nominal'

type DomValue<T extends NominalNumber = NominalNumber> = string | number | T

type DomValueOrChecked = DomValue | boolean

export {
    DomValue,
    DomValueOrChecked,
}
