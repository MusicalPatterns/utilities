import { Index, Offset, to } from '../nominal'

const INCLUSIVE: Offset = to.Offset(1)
const EXCLUSIVE: Offset = to.Offset(-1)

const INITIAL: Index = to.Index(0)

export {
    INCLUSIVE,
    EXCLUSIVE,
    INITIAL,
}
