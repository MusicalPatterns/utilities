import { apply, Cardinal, Index, INITIAL, NEXT } from '../nominal'
import { finalIndexFromElementsTotal } from './finalElement'

const repeat: <ElementType>(array: ElementType[], count: Cardinal) => ElementType[] =
    <ElementType>(array: ElementType[], count: Cardinal): ElementType[] => {
        let repeatedArray: ElementType[] = []
        for (
            let index: Index = INITIAL;
            index <= finalIndexFromElementsTotal(count);
            index = apply.Translation(index, NEXT)
        ) {
            repeatedArray = repeatedArray.concat(array)
        }

        return repeatedArray
    }

export {
    repeat,
}
