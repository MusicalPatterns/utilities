import { Cardinal, INITIAL, NEXT, Ordinal, use } from '../nominal'
import { finalIndexFromElementsTotal } from './finalElement'

const repeat: <ElementType>(array: ElementType[], count: Cardinal) => ElementType[] =
    <ElementType>(array: ElementType[], count: Cardinal): ElementType[] => {
        let repeatedArray: ElementType[] = []
        for (
            let index: Ordinal = INITIAL;
            index <= finalIndexFromElementsTotal(count);
            index = use.Translation(index, NEXT)
        ) {
            repeatedArray = repeatedArray.concat(array)
        }

        return repeatedArray
    }

export {
    repeat,
}
