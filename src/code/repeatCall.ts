import { apply, Cardinal, Index, INITIAL, NEXT } from '../nominal'
import { finalIndexFromElementsTotal } from './finalElement'

const repeatCall: <ElementType>(arrayFunction: () => ElementType[], count: Cardinal) => ElementType[] =
    <ElementType>(arrayFunction: () => ElementType[], count: Cardinal): ElementType[] => {
        let repeatedArrayFunction: ElementType[] = []
        for (
            let index: Index = INITIAL;
            index <= finalIndexFromElementsTotal(count);
            index = apply.Translation(index, NEXT)
        ) {
            repeatedArrayFunction = repeatedArrayFunction.concat(arrayFunction())
        }

        return repeatedArrayFunction
    }

export {
    repeatCall,
}
