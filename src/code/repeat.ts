import { Count, from } from '../nominal'

const repeat: <T>(array: T[], count: Count) => T[] =
    <T>(array: T[], count: Count): T[] => {
        let repeatedArray: T[] = []
        for (let i: number = 0; i < from.Count(count); i++) {
            repeatedArray = repeatedArray.concat(array)
        }

        return repeatedArray
    }

export {
    repeat,
}
