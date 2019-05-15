// tslint:disable max-file-line-count

import { AnyArrayedType, ArrayedOrStringType, ArrayedType, as, Cycle, INCREMENT, Ordinal, use } from '../nominal'
import { computeLength, indexJustBeyondFinalElement } from './finalElement'
import { isUndefined } from './typeGuards'

const slice: <ElementType, ArrayType extends ArrayedOrStringType<ElementType> = ElementType[]>(
    array: ArrayType,
    initial: Ordinal<ArrayType>,
    terminal?: Ordinal<ArrayType>,
) => ArrayType =
    <ElementType, ArrayType extends ArrayedOrStringType<ElementType> = ElementType[]>(
        array: ArrayType,
        initial: Ordinal<ArrayType>,
        terminal?: Ordinal<ArrayType>,
    ): ArrayType => {
        if (isUndefined(terminal)) {
            return array.slice(as.number(initial as unknown as Ordinal)) as ArrayType
        }

        if (terminal > indexJustBeyondFinalElement(array as unknown as AnyArrayedType)) {
            throw new Error(`You tried to slice up to index ${terminal} of an array with length \
of only ${computeLength(array)}: ${array}`)
        }

        return array.slice(
            as.number(initial as unknown as Ordinal),
            as.number(terminal as unknown as Ordinal),
        ) as ArrayType
    }

const cycleSlice: <ElementType>(
    cycle: Cycle<ElementType>,
    initial: Ordinal<Cycle<ElementType>>,
    terminal?: Ordinal<Cycle<ElementType>>,
) => ElementType[] =
    <ElementType>(
        cycle: Cycle<ElementType>,
        initial: Ordinal<Cycle<ElementType>>,
        terminal?: Ordinal<Cycle<ElementType>>,
    ): ElementType[] => {
        const terminalForSlice: Ordinal<Cycle<ElementType>> =
            isUndefined(terminal) ? indexJustBeyondFinalElement(cycle) : terminal

        const resultantSlice: ElementType[] = []

        for (
            let index: Ordinal<Cycle<ElementType>> = initial;
            index < terminalForSlice;
            index = use.Cardinal(index, INCREMENT)
        ) {
            resultantSlice.push(use.Ordinal(cycle, index))
        }

        return resultantSlice
    }

const forEach: <ElementType, ArrayType extends ArrayedType<ElementType> = ElementType[]>(
    array: ArrayType,
    callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType) => void,
) => void =
    <ElementType, ArrayType extends ArrayedType<ElementType> = ElementType[]>(
        array: ArrayType,
        callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType,
        ) => void): void => {
        // @ts-ignore
        array.forEach(callback)
    }

const map: <MappedElementType,
    MappedArrayType extends ArrayedType<MappedElementType>,
    ElementType,
    ArrayType extends ArrayedType<ElementType> = ElementType[]>(
    array: ArrayType,
    callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType) => MappedElementType,
) => MappedArrayType =
    <MappedElementType,
        MappedArrayType extends ArrayedType<MappedElementType>,
        ElementType,
        ArrayType extends ArrayedType<ElementType> = ElementType[]>(
        array: ArrayType,
        callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType,
        ) => MappedElementType): MappedArrayType =>
        // @ts-ignore
        array.map(callback)

const reduce: <ReducedType, ElementType, ArrayType extends ArrayedType<ElementType> = ElementType[]>(
    array: ElementType[],
    callback: (
        accumulator: ReducedType,
        element: ElementType,
        index: Ordinal<ArrayType>,
        self: ArrayType,
    ) => ReducedType,
    accumulator: Partial<ReducedType>,
) => ReducedType =
    <ReducedType, ElementType, ArrayType extends ArrayedType<ElementType> = ElementType[]>(
        array: ElementType[],
        callback: (
            accumulator: ReducedType,
            element: ElementType,
            index: Ordinal<ArrayType>,
            self: ArrayType,
        ) => ReducedType,
        accumulator: Partial<ReducedType>,
    ): ReducedType =>
        // @ts-ignore
        array.reduce(callback, accumulator)

const filter: <ElementType, ArrayType extends ArrayedType<ElementType> = ElementType[]>(
    array: ArrayType,
    callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType) => boolean,
) => ArrayType =
    <ElementType, ArrayType extends ArrayedType<ElementType> = ElementType[]>(
        array: ArrayType,
        callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType,
        ) => boolean): ArrayType =>
        // @ts-ignore
        array.filter(callback)

const every: <ElementType, ArrayType extends ArrayedType<ElementType> = ElementType[]>(
    array: ArrayType,
    callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType) => boolean,
) => boolean =
    <ElementType, ArrayType extends ArrayedType<ElementType> = ElementType[]>(
        array: ArrayType,
        callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType) => boolean,
    ): boolean =>
        // @ts-ignore
        array.every(callback)

const findIndex: <ElementType, ArrayType extends ArrayedType<ElementType> = ElementType[]>(
    array: ArrayType,
    callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType) => boolean,
) => Ordinal<ArrayType> =
    <ElementType, ArrayType extends ArrayedType<ElementType> = ElementType[]>(
        array: ArrayType,
        callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType) => boolean,
    ): Ordinal<ArrayType> =>
        // @ts-ignore
        array.findIndex(callback)

export {
    slice,
    cycleSlice,
    forEach,
    map,
    reduce,
    filter,
    every,
    findIndex,
}
