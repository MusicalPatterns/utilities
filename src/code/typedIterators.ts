// tslint:disable max-file-line-count

import { ArrayOverload, ArrayOverloadAny, as, Cycle, INCREMENT, notAs, Ordinal, use } from '../nominal'
import { indexJustBeyondFinalElement, length } from './finalElement'
import { isUndefined } from './isUndefined'

const slice: <ArrayType extends ArrayOverload>(
    array: ArrayType,
    initial: Ordinal<ArrayType>,
    terminal?: Ordinal<ArrayType>,
) => ArrayType =
    <ArrayType extends ArrayOverload>(
        array: ArrayType,
        initial: Ordinal<ArrayType>,
        terminal?: Ordinal<ArrayType>,
    ): ArrayType => {
        if (isUndefined(terminal)) {
            return array.slice(notAs.Ordinal(initial as unknown as Ordinal)) as ArrayType
        }

        if (terminal > indexJustBeyondFinalElement(array as unknown as ArrayOverloadAny)) {
            throw new Error(`You tried to slice up to index ${terminal} of an array with length \
of only ${length(array)}: ${array}`)
        }

        return array.slice(
            notAs.Ordinal(initial as unknown as Ordinal),
            notAs.Ordinal(terminal as unknown as Ordinal),
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

const forEach: <ElementType, ArrayType extends ArrayOverload & ElementType[] = ElementType[]>(
    array: ElementType[],
    callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType) => void,
) => void =
    <ElementType, ArrayType extends ArrayOverload & ElementType[] = ElementType[]>(
        array: ElementType[],
        callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType,
        ) => void): void => {
        // @ts-ignore
        array.forEach(callback)
    }

const map: <MappedElementType,
    MappedArrayType extends MappedElementType[],
    ElementType,
    ArrayType extends ArrayOverload & ElementType[] = ElementType[]>(
    array: ElementType[],
    callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType) => MappedElementType,
) => MappedArrayType =
    <MappedElementType,
        MappedArrayType extends MappedElementType[],
        ElementType,
        ArrayType extends ArrayOverload & ElementType[] = ElementType[]>(
        array: ElementType[],
        callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType,
        ) => MappedElementType): MappedArrayType =>
        // @ts-ignore
        array.map(callback)

const reduce: <ReducedType, ElementType, ArrayType extends ArrayOverload & ElementType[] = ElementType[]>(
    array: ElementType[],
    callback: (
        accumulator: ReducedType,
        element: ElementType,
        index: Ordinal<ArrayType>,
        self: ArrayType,
    ) => ReducedType,
    accumulator: Partial<ReducedType>,
) => ReducedType =
    <ReducedType, ElementType, ArrayType extends ArrayOverload & ElementType[] = ElementType[]>(
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

const filter: <ElementType, ArrayType extends ArrayOverload & ElementType[] = ElementType[]>(
    array: ArrayType,
    callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType) => boolean,
) => ArrayType =
    <ElementType, ArrayType extends ArrayOverload & ElementType[] = ElementType[]>(
        array: ArrayType,
        callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType,
        ) => boolean): ArrayType =>
        // @ts-ignore
        array.filter(callback)

const every: <ElementType, ArrayType extends ArrayOverload & ElementType[] = ElementType[]>(
    array: ArrayType,
    callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType) => boolean,
) => boolean =
    <ElementType, ArrayType extends ArrayOverload & ElementType[] = ElementType[]>(
        array: ArrayType,
        callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType) => boolean,
    ): boolean =>
        // @ts-ignore
        array.every(callback)

const findIndex: <ElementType, ArrayType extends ArrayOverload & ElementType[] = ElementType[]>(
    array: ArrayType,
    callback: (element: ElementType, index: Ordinal<ArrayType>, self: ArrayType) => boolean,
) => Ordinal<ArrayType> =
    <ElementType, ArrayType extends ArrayOverload & ElementType[] = ElementType[]>(
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
