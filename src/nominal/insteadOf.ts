import { OperationBrand, OperationNameFromOperation } from './types'

const insteadOf: <Operation,
    OfType = number,
    DiscardingOfType extends unknown = unknown,
    // tslint:disable-next-line max-line-length
    OperationType extends OperationBrand<OperationNameFromOperation<Operation>, DiscardingOfType> = OperationBrand<OperationNameFromOperation<Operation>, DiscardingOfType>>(
    operation: OperationType,
) => OperationBrand<OperationNameFromOperation<Operation>, OfType> =
    <Operation,
        OfType = number,
        DiscardingOfType extends unknown = unknown,
        // tslint:disable-next-line max-line-length
        OperationType extends OperationBrand<OperationNameFromOperation<Operation>, DiscardingOfType> = OperationBrand<OperationNameFromOperation<Operation>, DiscardingOfType>>(
        operation: OperationType,
    ): OperationBrand<OperationNameFromOperation<Operation>, OfType> =>
        operation as unknown as OperationBrand<OperationNameFromOperation<Operation>, OfType>

export {
    insteadOf,
}
