// tslint:disable no-any no-type-definitions-outside-types-modules no-object-literal-type-assertion ban-types max-line-length

import { reduce } from '../code'

type DummyValueForComputingNominalInterface = unknown

interface NominalInterfaceOptionObject {
    number?: any,
    numericArray?: any,
}

type FromMono<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Index in keyof NominalInterfaceOptionObjectType['number']]:
    (value: NominalInterfaceOptionObjectType['number'][Index]) => number
}
type FromPoly<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Index in keyof NominalInterfaceOptionObjectType['numericArray']]:
    (value: NominalInterfaceOptionObjectType['numericArray'][Index]) => number[]
}
type From<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> =
    FromMono<NominalInterfaceOptionObjectType> & FromPoly<NominalInterfaceOptionObjectType>

type ToMono<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Index in keyof NominalInterfaceOptionObjectType['number']]:
    <NumericType extends Number = Number>(value: NumericType) => NominalInterfaceOptionObjectType['number'][Index]
}
type ToPoly<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Index in keyof NominalInterfaceOptionObjectType['numericArray']]:
    <NumericElementType extends Number = Number>(
        value: NumericElementType[],
    ) => NominalInterfaceOptionObjectType['numericArray'][Index]
}
type To<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> =
    ToMono<NominalInterfaceOptionObjectType> & ToPoly<NominalInterfaceOptionObjectType>

interface NominalInterface<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> {
    from: From<NominalInterfaceOptionObjectType>,
    to: To<NominalInterfaceOptionObjectType>,
}

const computeNominalInterface: <NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject>(
    nominalInterfaceOptionsObject: NominalInterfaceOptionObjectType,
) => NominalInterface<NominalInterfaceOptionObjectType> =
    <NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject>(
        nominalInterfaceOptionsObject: NominalInterfaceOptionObjectType,
    ): NominalInterface<NominalInterfaceOptionObjectType> => ({
        from: {
            ...reduce(
                Object.keys(nominalInterfaceOptionsObject.number || {}),
                (
                    accumulator: FromMono<NominalInterfaceOptionObjectType>, typeName: string,
                ): FromMono<NominalInterfaceOptionObjectType> => ({
                    ...accumulator,
                    [ typeName ]: (value: unknown): number => value as number,
                }),
                {},
            ),
            ...reduce(
                Object.keys(nominalInterfaceOptionsObject.numericArray || {}),
                (
                    accumulator: FromPoly<NominalInterfaceOptionObjectType>, typeName: string,
                ): FromPoly<NominalInterfaceOptionObjectType> => ({
                    ...accumulator,
                    [ typeName ]: (values: unknown): number[] => values as number[],
                }),
                {},
            ),
        },
        to: {
            ...reduce(
                Object.keys(nominalInterfaceOptionsObject.number || {}),
                (
                    accumulator: ToMono<NominalInterfaceOptionObjectType>, typeName: string,
                ): ToMono<NominalInterfaceOptionObjectType> => ({
                    ...accumulator,
                    [ typeName ]: <NumericType extends Number = Number>(value: NumericType): unknown => value,
                }),
                {},
            ),
            ...reduce(
                Object.keys(nominalInterfaceOptionsObject.numericArray || {}),
                (
                    accumulator: ToPoly<NominalInterfaceOptionObjectType>, typeName: string,
                ): ToPoly<NominalInterfaceOptionObjectType> => ({
                    ...accumulator,
                    [ typeName ]: <NumericElementType extends Number = Number>(values: NumericElementType[]): unknown => values,
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
}
