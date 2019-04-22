import { Cardinal, INITIAL, NEXT, Ordinal, use } from '../nominal'
import { finalIndexFromElementsTotal } from './finalElement'

const repeatCall:
    <ElementType>(arrayFunction: () => ElementType[], count: Cardinal<Array<() => ElementType[]>>) => ElementType[] =
    <ElementType>(arrayFunction: () => ElementType[], count: Cardinal<Array<() => ElementType[]>>): ElementType[] => {
        let repeatedArrayFunction: ElementType[] = []
        for (
            let index: Ordinal<Array<() => ElementType[]>> = INITIAL;
            index <= finalIndexFromElementsTotal(count);
            index = use.Translation(index, NEXT)
        ) {
            repeatedArrayFunction = repeatedArrayFunction.concat(arrayFunction())
        }

        return repeatedArrayFunction
    }

export {
    repeatCall,
}
