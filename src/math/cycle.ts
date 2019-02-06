import { apply, Cardinal, from, Ordinal, to, Translation } from '../nominal'
import { wrapWithin } from './wrapWithin'

const cycle: <T>(array: T[], translation: Translation) => T[] =
    <T>(array: T[], translation: Translation): T[] => {
        const cycledArray: T[] = []
        const cellCount: Cardinal = to.Cardinal(array.length)

        for (
            let index: Ordinal = to.Ordinal(0);
            index < to.Ordinal(from.Cardinal(cellCount));
            index = apply.Translation(index, to.Translation(1))
        ) {
            let cycledIndex: Ordinal = apply.Translation(index, translation)
            cycledIndex = to.Ordinal(wrapWithin(from.Ordinal(cycledIndex), from.Cardinal(cellCount)))
            cycledArray.push(array[ from.Ordinal(cycledIndex) ])
        }

        return cycledArray
    }

export {
    cycle,
}
