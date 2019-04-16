import { OperationBrand } from './types'

// tslint:disable-next-line max-line-length
const insteadOf: <OfType, DiscardingOfType, OperationTypeName, OperationType extends OperationBrand<OperationTypeName, DiscardingOfType> = OperationBrand<OperationTypeName, DiscardingOfType>>(
    operation: OperationType,
) => OperationBrand<OperationTypeName, OfType> =
// tslint:disable-next-line max-line-length
    <OfType, DiscardingOfType, OperationTypeName, OperationType extends OperationBrand<OperationTypeName, DiscardingOfType> = OperationBrand<OperationTypeName, DiscardingOfType>>(
        operation: OperationType,
    ): OperationBrand<OperationTypeName, OfType> =>
        operation as unknown as OperationBrand<OperationTypeName, OfType>

export {
    insteadOf,
}
