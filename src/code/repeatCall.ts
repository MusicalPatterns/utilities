import { NEXT } from '../math'
import { apply, Cardinal, from, Ordinal, to } from '../nominal'
import { INITIAL } from './constants'

const repeatCall: <ElementType>(arrayFunction: () => ElementType[], count: Cardinal) => ElementType[] =
    <ElementType>(arrayFunction: () => ElementType[], count: Cardinal): ElementType[] => {
        let repeatedArrayFunction: ElementType[] = []
        for (
            let index: Ordinal = INITIAL;
            index < to.Ordinal(from.Cardinal(count));
            index = apply.Translation(index, NEXT)
        ) {
            repeatedArrayFunction = repeatedArrayFunction.concat(arrayFunction())
        }

        return repeatedArrayFunction
    }

export {
    repeatCall,
}
