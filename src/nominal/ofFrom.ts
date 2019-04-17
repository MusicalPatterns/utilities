import { Of } from './types'

const ofFrom: <OfType>(value: OfType) => Of<OfType> =
    <OfType>(value: OfType): Of<OfType> =>
        value as unknown as Of<OfType>

export {
    ofFrom,
}
