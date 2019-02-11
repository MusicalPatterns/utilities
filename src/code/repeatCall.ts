import { NEXT } from '../math'
import { apply, Cardinal, from, Ordinal, to } from '../nominal'
import { INITIAL } from './constants'

const repeatCall: <T>(arrayFunction: () => T[], count: Cardinal) => T[] =
    <T>(arrayFunction: () => T[], count: Cardinal): T[] => {
        let repeatedArrayFunction: T[] = []
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
