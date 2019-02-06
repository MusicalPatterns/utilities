import { Cardinal, from } from '../nominal'

const repeatCall: <T>(arrayFunction: () => T[], cardinal: Cardinal) => T[] =
    <T>(arrayFunction: () => T[], cardinal: Cardinal): T[] => {
        let repeatedArrayFunction: T[] = []
        for (let i: number = 0; i < from.Cardinal(cardinal); i += 1) {
            repeatedArrayFunction = repeatedArrayFunction.concat(arrayFunction())
        }

        return repeatedArrayFunction
    }

export {
    repeatCall,
}
