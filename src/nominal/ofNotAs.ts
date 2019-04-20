import { Of } from './types'

const ofNotAs: <OfType>(value: OfType) => Of<OfType> =
    <OfType>(value: OfType): Of<OfType> =>
        value as unknown as Of<OfType>

export {
    ofNotAs,
}
