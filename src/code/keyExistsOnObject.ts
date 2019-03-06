import { DictionaryOf } from './types'

const keyExistsOnObject: <T extends DictionaryOf<unknown>>(key: string, object: T) => boolean =
    <T extends DictionaryOf<unknown>>(key: string, object: T): boolean =>
        key in object

export {
    keyExistsOnObject,
}
