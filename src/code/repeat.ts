import { Cardinal, from } from '../nominal'

const repeat: <T>(array: T[], cardinal: Cardinal) => T[] =
    <T>(array: T[], cardinal: Cardinal): T[] => {
        let repeatedArray: T[] = []
        for (let i: number = 0; i < from.Cardinal(cardinal); i += 1) {
            repeatedArray = repeatedArray.concat(array)
        }

        return repeatedArray
    }

export {
    repeat,
}
