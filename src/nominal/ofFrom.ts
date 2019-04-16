import { Of, OperationBrand, UnitsBrand } from './types'

// tslint:disable-next-line max-line-length
const ofOperation: <Operation, ValueType extends OperationBrand<Operation> = OperationBrand<Operation>>(
    value: ValueType,
) =>  Of<OperationBrand<Operation>> =
    // tslint:disable-next-line max-line-length
    <Operation, ValueType extends OperationBrand<Operation> = OperationBrand<Operation>>(
        value: ValueType,
    ): Of<OperationBrand<Operation>> =>
        value as unknown as  Of<OperationBrand<Operation>>

// tslint:disable-next-line max-line-length
const ofUnits: <Units, ValueType extends UnitsBrand<Units> = UnitsBrand<Units>>(
    value: ValueType,
) =>  Of<UnitsBrand<Units>> =
    // tslint:disable-next-line max-line-length
    <Operation, ValueType extends UnitsBrand<Operation> = UnitsBrand<Operation>>(
        value: ValueType,
    ): Of<UnitsBrand<Operation>> =>
        value as unknown as  Of<UnitsBrand<Operation>>

export {
    ofOperation,
    ofUnits,
}
