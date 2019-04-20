// tslint:disable

import { reduce } from '../code'
import { NoUnits, Of } from './types'

type DummyValueForComputingNominalInterface = unknown

interface NominalInterfaceOptionObject {
    number?: any,
    numericArray?: any,
}

type CustomNotAsMono<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Index in keyof NominalInterfaceOptionObjectType['number']]:
    (value: NominalInterfaceOptionObjectType['number'][Index]) => number
}
type CustomNotAsPoly<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Index in keyof NominalInterfaceOptionObjectType['numericArray']]:
    (value: NominalInterfaceOptionObjectType['numericArray'][Index]) => number[]
}
type CustomNotAs<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> =
    CustomNotAsMono<NominalInterfaceOptionObjectType> & CustomNotAsPoly<NominalInterfaceOptionObjectType>

type CustomAsMono<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Index in keyof NominalInterfaceOptionObjectType['number']]:
    <NumericType extends NoUnits>(value: NumericType) => NominalInterfaceOptionObjectType['number'][Index]
}
type CustomAsPoly<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Index in keyof NominalInterfaceOptionObjectType['numericArray']]:
    <NumericElementType extends NoUnits>(
        value: NumericElementType[],
    ) => NominalInterfaceOptionObjectType['numericArray'][Index]
}
type CustomAs<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> =
    CustomAsMono<NominalInterfaceOptionObjectType> & CustomAsPoly<NominalInterfaceOptionObjectType>

type CustomOfMono<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Index in keyof NominalInterfaceOptionObjectType['number']]:
    <NumericType extends NoUnits>(value: NumericType) => Of<NominalInterfaceOptionObjectType['number'][Index]>
}
type CustomOfPoly<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Index in keyof NominalInterfaceOptionObjectType['numericArray']]:
    <NumericType extends NoUnits>(value: NumericType) => Of<NominalInterfaceOptionObjectType['numericArray'][Index]>
}
type CustomOf<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> =
    CustomOfMono<NominalInterfaceOptionObjectType> & CustomOfPoly<NominalInterfaceOptionObjectType>

interface NominalInterface<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> {
    notAs: CustomNotAs<NominalInterfaceOptionObjectType>,
    of: CustomOf<NominalInterfaceOptionObjectType>,
    as: CustomAs<NominalInterfaceOptionObjectType>,
}

const computeNominalInterface: <NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject>(
    nominalInterfaceOptionsObject: NominalInterfaceOptionObjectType,
) => NominalInterface<NominalInterfaceOptionObjectType> =
    <NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject>(
        nominalInterfaceOptionsObject: NominalInterfaceOptionObjectType,
    ): NominalInterface<NominalInterfaceOptionObjectType> => ({
        notAs: {
            ...reduce(
                Object.keys(nominalInterfaceOptionsObject.number || {}),
                (
                    accumulator: CustomNotAsMono<NominalInterfaceOptionObjectType>, typeName: string,
                ): CustomNotAsMono<NominalInterfaceOptionObjectType> => ({
                    ...accumulator,
                    [ typeName ]: (value: unknown): number => value as number,
                }),
                {},
            ),
            ...reduce(
                Object.keys(nominalInterfaceOptionsObject.numericArray || {}),
                (
                    accumulator: CustomNotAsPoly<NominalInterfaceOptionObjectType>, typeName: string,
                ): CustomNotAsPoly<NominalInterfaceOptionObjectType> => ({
                    ...accumulator,
                    [ typeName ]: (values: unknown): number[] => values as number[],
                }),
                {},
            ),
        },
        of: {
            ...reduce(
                Object.keys(nominalInterfaceOptionsObject.number || {}),
                (
                    accumulator: CustomOfMono<NominalInterfaceOptionObjectType>, typeName: string,
                ): CustomOfMono<NominalInterfaceOptionObjectType> => ({
                    ...accumulator,
                    [ typeName ]: <NumericType extends NoUnits>(value: NumericType): unknown => value,
                }),
                {},
            ),
            ...reduce(
                Object.keys(nominalInterfaceOptionsObject.numericArray || {}),
                (
                    accumulator: CustomOfPoly<NominalInterfaceOptionObjectType>, typeName: string,
                ): CustomOfPoly<NominalInterfaceOptionObjectType> => ({
                    ...accumulator,
                    [ typeName ]: <NumericType extends NoUnits>(value: NumericType): unknown => value,
                }),
                {},
            ),
        },
        as: {
            ...reduce(
                Object.keys(nominalInterfaceOptionsObject.number || {}),
                (
                    accumulator: CustomAsMono<NominalInterfaceOptionObjectType>, typeName: string,
                ): CustomAsMono<NominalInterfaceOptionObjectType> => ({
                    ...accumulator,
                    [ typeName ]: <NumericType extends NoUnits>(value: NumericType): unknown => value,
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
    DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE,
    computeNominalInterface,
    NominalInterface,
    NominalInterfaceOptionObject,
    CustomAs,
    CustomNotAs,
    CustomOf,
}
