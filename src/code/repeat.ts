import { NEXT } from '../math'
import { apply, Cardinal, from, Ordinal, to } from '../nominal'
import { INITIAL } from './constants'

const repeat: <T>(array: T[], count: Cardinal) => T[] =
    <T>(array: T[], count: Cardinal): T[] => {
        let repeatedArray: T[] = []
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
