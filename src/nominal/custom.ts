// tslint:disable no-any no-type-definitions-outside-types-modules no-object-literal-type-assertion ban-types

type DummyValueForBuildingNominalInterface = unknown

interface NominalInterfaceOptionObject {
    number?: any,
    numericArray?: any,
}

type FromMono<T extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> =
    { [K in keyof T['number']]: (value: T['number'][K]) => number }
type FromPoly<T extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> =
    { [K in keyof T['numericArray']]: (value: T['numericArray'][K]) => number[] }
type From<T extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = FromMono<T> & FromPoly<T>

type ToMono<T extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> =
    { [K in keyof T['number']]: <V extends Number>(value: V) => T['number'][K] }
type ToPoly<T extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> =
    { [K in keyof T['numericArray']]: <V extends Number>(value: V[]) => T['numericArray'][K] }
type To<T extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = ToMono<T> & ToPoly<T>

interface NominalInterface<T extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> {
    from: From<T>,
    to: To<T>,
}

const buildNominalInterface:
    <T extends NominalInterfaceOptionObject>(nominalInterfaceOptionsObject: T) => NominalInterface<T> =
    <T extends NominalInterfaceOptionObject>(nominalInterfaceOptionsObject: T): NominalInterface<T> => ({
        from: {
            ...Object.keys(nominalInterfaceOptionsObject.number || {})
                .reduce(
                    (accumulator: FromMono<T>, typeName: string): FromMono<T> => ({
                        ...accumulator,
                        [ typeName ]: (value: unknown): number => value as number,
                    }),
                    {} as FromMono<T>,
                ),
            ...Object.keys(nominalInterfaceOptionsObject.numericArray || {})
                .reduce(
                    (accumulator: FromPoly<T>, typeName: string): FromPoly<T> => ({
                        ...accumulator,
                        [ typeName ]: (values: unknown): number[] => values as number[],
                    }),
                    {} as FromPoly<T>,
                ),
        },
        to: {
            ...Object.keys(nominalInterfaceOptionsObject.number || {})
                .reduce(
                    (accumulator: ToMono<T>, typeName: string): ToMono<T> => ({
                        ...accumulator,
                        [ typeName ]: <V extends Number>(value: V): unknown => value,
                    }),
                    {} as ToMono<T>,
                ),
            ...Object.keys(nominalInterfaceOptionsObject.numericArray || {})
                .reduce(
                    (accumulator: ToPoly<T>, typeName: string): ToPoly<T> => ({
                        ...accumulator,
                        [ typeName ]: <V extends Number>(values: V[]): unknown => values,
                    }),
                    {} as ToPoly<T>,
                ),
        },
    })

const DUMMY_VALUE_FOR_BUILDING_NOMINAL_INTERFACE: DummyValueForBuildingNominalInterface = undefined

export {
    DUMMY_VALUE_FOR_BUILDING_NOMINAL_INTERFACE,
    buildNominalInterface,
    NominalInterface,
}
