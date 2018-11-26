import { apply, Index, to } from '../nominal'

const offsetFromOneIndexedToZeroIndexed: (index: Index) => Index =
    (index: Index): Index =>
        apply.Offset(index, to.Offset(-1))

export {
    offsetFromOneIndexedToZeroIndexed,
}
