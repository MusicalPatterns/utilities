import { NEXT } from '../math'
import { apply, Cardinal, Ordinal } from '../nominal'
import { INITIAL } from './constants'
import { finalIndexFromElementsTotal } from './finalElement'

const repeatCall: <ElementType>(arrayFunction: () => ElementType[], count: Cardinal) => ElementType[] =
    <ElementType>(arrayFunction: () => ElementType[], count: Cardinal): ElementType[] => {
        let repeatedArrayFunction: ElementType[] = []
        for (
            let index: Ordinal = INITIAL;
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
