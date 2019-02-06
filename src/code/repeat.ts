import { Cardinal, from } from '../nominal'

const repeat: <T>(array: T[], count: Cardinal) => T[] =
    <T>(array: T[], count: Cardinal): T[] => {
        let repeatedArray: T[] = []
        for (let i: number = 0; i < from.Cardinal(count); i += 1) {
            repeatedArray = repeatedArray.concat(array)
        }

        return repeatedArray
    }

export {
    repeat,
}
