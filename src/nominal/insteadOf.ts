import { UseBrand, UseBrandFromUse } from './types'

const insteadOf: <Use,
    OfType = number,
    DiscardingOfType extends unknown = unknown,
    // tslint:disable-next-line max-line-length
    UseType extends UseBrand<UseBrandFromUse<Use>, DiscardingOfType> = UseBrand<UseBrandFromUse<Use>, DiscardingOfType>>(
    use: UseType,
) => UseBrand<UseBrandFromUse<Use>, OfType> =
    <Use,
        OfType = number,
        DiscardingOfType extends unknown = unknown,
        // tslint:disable-next-line max-line-length
        UseType extends UseBrand<UseBrandFromUse<Use>, DiscardingOfType> = UseBrand<UseBrandFromUse<Use>, DiscardingOfType>>(
        use: UseType,
    ): UseBrand<UseBrandFromUse<Use>, OfType> =>
        use as unknown as UseBrand<UseBrandFromUse<Use>, OfType>

export {
    insteadOf,
}
