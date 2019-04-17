import { Of, OperationBrand, OperationNameFromOperation, UnitsBrand, UnitsNameFromUnits } from './types'

// tslint:disable-next-line max-line-length
const ofOperation: <Operation, ValueType extends OperationBrand<OperationNameFromOperation<Operation>> = OperationBrand<OperationNameFromOperation<Operation>>>(
    value: ValueType,
) => Of<OperationBrand<OperationNameFromOperation<Operation>>> =
    // tslint:disable-next-line max-line-length
    <Operation, ValueType extends OperationBrand<OperationNameFromOperation<Operation>> = OperationBrand<OperationNameFromOperation<Operation>>>(
        value: ValueType,
    ): Of<OperationBrand<OperationNameFromOperation<Operation>>> =>
        value as unknown as Of<OperationBrand<OperationNameFromOperation<Operation>>>

// tslint:disable-next-line max-line-length
const ofUnits: <Units, ValueType extends UnitsBrand<UnitsNameFromUnits<Units>> = UnitsBrand<UnitsNameFromUnits<Units>>>(
    value: ValueType,
) => Of<UnitsBrand<UnitsNameFromUnits<Units>>> =
    // tslint:disable-next-line max-line-length
    <Units, ValueType extends UnitsBrand<UnitsNameFromUnits<Units>> = UnitsBrand<UnitsNameFromUnits<Units>>>(
        value: ValueType,
    ): Of<UnitsBrand<UnitsNameFromUnits<Units>>> =>
        value as unknown as Of<UnitsBrand<UnitsNameFromUnits<Units>>>

export {
    ofOperation,
    ofUnits,
}
