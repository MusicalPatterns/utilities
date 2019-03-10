import { NEXT } from '../math'
import { apply, Cardinal, from, Ordinal, to } from '../nominal'
import { INITIAL } from './constants'

const repeat: <ElementType>(array: ElementType[], count: Cardinal) => ElementType[] =
    <ElementType>(array: ElementType[], count: Cardinal): ElementType[] => {
        let repeatedArray: ElementType[] = []
        for (
            let index: Ordinal = INITIAL;
            index < to.Ordinal(from.Cardinal(count));
            index = apply.Translation(index, NEXT)
        ) {
            repeatedArray = repeatedArray.concat(array)
        }

        return repeatedArray
    }

export {
    repeat,
}
