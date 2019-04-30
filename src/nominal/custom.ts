// tslint:disable

import { reduce } from '../code'
import { NoUnits } from './types'

interface NominalNumber {
    _NominalBrand?: string,
    _UnitsBrand?: string,
    _UseBrand?: string,
}

type DummyValueForComputingNominalInterface = unknown

interface NominalInterfaceOptionObject {
    number?: any,
    numericArray?: any,
}

type CustomAsMono<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Index in keyof NominalInterfaceOptionObjectType['number']]:
    <NumericType extends NoUnits>(numeral: NumericType) => NominalInterfaceOptionObjectType['number'][Index]
}
type CustomAsPoly<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Index in keyof NominalInterfaceOptionObjectType['numericArray']]:
    <NumericElementType extends NoUnits>(
        value: NumericElementType[],
    ) => NominalInterfaceOptionObjectType['numericArray'][Index]
}
type CustomAs<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> =
    CustomAsMono<NominalInterfaceOptionObjectType> & CustomAsPoly<NominalInterfaceOptionObjectType>

interface NominalInterface<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> {
    as: CustomAs<NominalInterfaceOptionObjectType>,
}

const computeNominalInterface: <NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject>(
    nominalInterfaceOptionsObject: NominalInterfaceOptionObjectType,
) => NominalInterface<NominalInterfaceOptionObjectType> =
    <NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject>(
        nominalInterfaceOptionsObject: NominalInterfaceOptionObjectType,
    ): NominalInterface<NominalInterfaceOptionObjectType> => ({
        as: {
            ...reduce(
                Object.keys(nominalInterfaceOptionsObject.number || {}),
                (
                    accumulator: CustomAsMono<NominalInterfaceOptionObjectType>, typeName: string,
                ): CustomAsMono<NominalInterfaceOptionObjectType> => ({
                    ...accumulator,
                    [ typeName ]: <NumericType extends NoUnits>(numeral: NumericType): unknown => numeral,
                }),
                {},
            ),
            ...reduce(
                Object.keys(nominalInterfaceOptionsObject.numericArray || {}),
                (
                    accumulator: CustomAsPoly<NominalInterfaceOptionObjectType>, typeName: string,
                ): CustomAsPoly<NominalInterfaceOptionObjectType> => ({
                    ...accumulator,
                    [ typeName ]: <NumericElementType extends NoUnits>(values: NumericElementType[]): unknown => values,
                }),
                {},
            ),
        },
    })

const DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE: DummyValueForComputingNominalInterface = undefined

export {
    NominalNumber,
    DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE,
    computeNominalInterface,
    NominalInterface,
    NominalInterfaceOptionObject,
    CustomAs,
}
