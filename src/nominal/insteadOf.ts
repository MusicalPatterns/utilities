import { UseBrand, UseNameFromUse } from './types'

const insteadOf: <Use,
    OfType = number,
    DiscardingOfType extends unknown = unknown,
    // tslint:disable-next-line max-line-length
    UseType extends UseBrand<UseNameFromUse<Use>, DiscardingOfType> = UseBrand<UseNameFromUse<Use>, DiscardingOfType>>(
    use: UseType,
) => UseBrand<UseNameFromUse<Use>, OfType> =
    <Use,
        OfType = number,
        DiscardingOfType extends unknown = unknown,
        // tslint:disable-next-line max-line-length
        UseType extends UseBrand<UseNameFromUse<Use>, DiscardingOfType> = UseBrand<UseNameFromUse<Use>, DiscardingOfType>>(
        use: UseType,
    ): UseBrand<UseNameFromUse<Use>, OfType> =>
        use as unknown as UseBrand<UseNameFromUse<Use>, OfType>

export {
    insteadOf,
}
