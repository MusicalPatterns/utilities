// tslint:disable no-any no-type-definitions-outside-types-modules no-object-literal-type-assertion ban-types

interface NominalInterfaceOptionObject {
    number: any,
    numericArray: any,
}

type FromMono<T extends NominalInterfaceOptionObject> =
    { [K in keyof T['number']]: (value: T['number'][K]) => number }
type FromPoly<T extends NominalInterfaceOptionObject> =
    { [K in keyof T['numericArray']]: (value: T['numericArray'][K]) => number[] }
type From<T extends NominalInterfaceOptionObject> = FromMono<T> & FromPoly<T>

type ToMono<T extends NominalInterfaceOptionObject> =
    { [K in keyof T['number']]: <V extends Number>(value: V) => T['number'][K] }
type ToPoly<T extends NominalInterfaceOptionObject> =
    { [K in keyof T['numericArray']]: <V extends Number>(value: V[]) => T['numericArray'][K] }
type To<T extends NominalInterfaceOptionObject> = ToMono<T> & ToPoly<T>

interface NominalInterface<T extends NominalInterfaceOptionObject> {
    from: From<T>,
    to: To<T>,
}

const buildNominalInterface: <T extends NominalInterfaceOptionObject>(typesObject: T) => NominalInterface<T> =
    <T extends NominalInterfaceOptionObject>(typesObject: T): NominalInterface<T> => ({
        from: {
            ...Object.keys(typesObject.number)
                .reduce(
                    (accumulator: FromMono<T>, typeName: string): FromMono<T> => ({
                        ...accumulator,
                        [ typeName ]: (value: any): number => value as number,
                    }),
                    {} as FromMono<T>,
                ),
            ...Object.keys(typesObject.numericArray)
                .reduce(
                    (accumulator: FromPoly<T>, typeName: string): FromPoly<T> => ({
                        ...accumulator,
                        [ typeName ]: (values: any): number[] => values as number[],
                    }),
                    {} as FromPoly<T>,
                ),
        },
        to: {
            ...Object.keys(typesObject.number)
                .reduce(
                    (accumulator: ToMono<T>, typeName: string): ToMono<T> => ({
                        ...accumulator,
                        [ typeName ]: <V extends Number>(value: V): any => value as any,
                    }),
                    {} as ToMono<T>,
                ),
            ...Object.keys(typesObject.numericArray)
                .reduce(
                    (accumulator: ToPoly<T>, typeName: string): ToPoly<T> => ({
                        ...accumulator,
                        [ typeName ]: <V extends Number>(values: V[]): any => values as any,
                    }),
                    {} as ToPoly<T>,
                ),
        },
    })

const DUMMY_VALUE_FOR_BUILDING_NOMINAL_INTERFACE: number = 0

export {
    DUMMY_VALUE_FOR_BUILDING_NOMINAL_INTERFACE,
    buildNominalInterface,
}
