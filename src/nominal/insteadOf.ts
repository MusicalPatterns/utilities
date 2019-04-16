import { OperationBrand, OperationTypeNameFromOperationType } from './types'

// tslint:disable-next-line max-line-length
const insteadOf: <Operation, OfType, DiscardingOfType extends Number = Number, OperationType extends OperationBrand<OperationTypeNameFromOperationType<Operation>, DiscardingOfType> = OperationBrand<OperationTypeNameFromOperationType<Operation>, DiscardingOfType>>(
    operation: OperationType,
) => OperationBrand<OperationTypeNameFromOperationType<Operation>, OfType> =
// tslint:disable-next-line max-line-length
    <Operation, OfType, DiscardingOfType extends Number = Number, OperationType extends OperationBrand<OperationTypeNameFromOperationType<Operation>, DiscardingOfType> = OperationBrand<OperationTypeNameFromOperationType<Operation>, DiscardingOfType>>(
        operation: OperationType,
    ): OperationBrand<OperationTypeNameFromOperationType<Operation>, OfType> =>
        operation as unknown as OperationBrand<OperationTypeNameFromOperationType<Operation>, OfType>

export {
    insteadOf,
}
