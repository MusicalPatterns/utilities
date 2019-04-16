import { Of, OperationBrand, UnitsBrand } from './types'

// tslint:disable-next-line max-line-length
const ofOperation: <OperationName, ValueType extends OperationBrand<OperationName> = OperationBrand<OperationName>>(
    value: ValueType,
) =>  Of<OperationBrand<OperationName>> =
    // tslint:disable-next-line max-line-length
    <OperationName, ValueType extends OperationBrand<OperationName> = OperationBrand<OperationName>>(
        value: ValueType,
    ): Of<OperationBrand<OperationName>> =>
        value as unknown as  Of<OperationBrand<OperationName>>

// tslint:disable-next-line max-line-length
const ofUnits: <UnitsName, ValueType extends UnitsBrand<UnitsName> = UnitsBrand<UnitsName>>(
    value: ValueType,
) =>  Of<UnitsBrand<UnitsName>> =
    // tslint:disable-next-line max-line-length
    <UnitsName, ValueType extends UnitsBrand<UnitsName> = UnitsBrand<UnitsName>>(
        value: ValueType,
    ): Of<UnitsBrand<UnitsName>> =>
        value as unknown as  Of<UnitsBrand<UnitsName>>

export {
    ofOperation,
    ofUnits,
}
