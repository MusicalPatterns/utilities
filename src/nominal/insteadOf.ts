import { OperationBrand, OperationNameFromOperation } from './types'

// tslint:disable-next-line max-line-length
const insteadOf: <Operation, OfType, DiscardingOfType extends unknown = unknown, OperationType extends OperationBrand<OperationNameFromOperation<Operation>, DiscardingOfType> = OperationBrand<OperationNameFromOperation<Operation>, DiscardingOfType>>(
    operation: OperationType,
) => OperationBrand<OperationNameFromOperation<Operation>, OfType> =
// tslint:disable-next-line max-line-length
    <Operation, OfType, DiscardingOfType extends unknown = unknown, OperationType extends OperationBrand<OperationNameFromOperation<Operation>, DiscardingOfType> = OperationBrand<OperationNameFromOperation<Operation>, DiscardingOfType>>(
        operation: OperationType,
    ): OperationBrand<OperationNameFromOperation<Operation>, OfType> =>
        operation as unknown as OperationBrand<OperationNameFromOperation<Operation>, OfType>

export {
    insteadOf,
}
