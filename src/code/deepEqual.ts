// tslint:disable no-any

import { isArray, isObject } from './typeGuards'

const deepEqualArray: (firstValue: any, secondValue: any) => boolean =
    (firstValue: any, secondValue: any): boolean =>
        isArray(firstValue) && secondValue.every(
        (el: any, index: number): boolean => deepEqual(el, firstValue[ index ]),
        )

const deepEqualObject: (firstValue: any, secondValue: any) => boolean =
    (firstValue: any, secondValue: any): boolean => {
        let equal: boolean = false

        if (isArray(firstValue)) {
            equal = false
        }
        else if (isObject(firstValue)) {
            equal = Object.entries(secondValue)
                .every(([ key, value ]: [ string, any ]): boolean =>
                    deepEqual(value, firstValue[ key ]))
        }
        else {
            equal = false
        }

        return equal
    }

const deepEqual: (firstValue: any, secondValue: any) => boolean =
    (firstValue: any, secondValue: any): boolean => {
        let equal: boolean = false

        if (firstValue === secondValue) {
            equal = true
        }
        else if (isArray(firstValue)) {
            equal = deepEqualArray(secondValue, firstValue)
        }
        else if (isObject(firstValue)) {
            // tslint:disable-next-line arguments-order
            equal = deepEqualObject(secondValue, firstValue)
        }

        return equal
    }

export {
    deepEqual,
}
