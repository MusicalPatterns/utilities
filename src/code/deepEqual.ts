// tslint:disable no-any

const deepEqualArray: (firstValue: any, secondValue: any) => boolean =
    (firstValue: any, secondValue: any): boolean =>
        firstValue instanceof Array && secondValue.every(
        (el: any, index: number): boolean => deepEqual(el, firstValue[ index ]),
        )

const deepEqualObject: (firstValue: any, secondValue: any) => boolean =
    (firstValue: any, secondValue: any): boolean => {
        let equal: boolean = false

        if (firstValue instanceof Array) {
            equal = false
        }
        else if (typeof firstValue === 'object') {
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
        else if (firstValue instanceof Array) {
            equal = deepEqualArray(secondValue, firstValue)
        }
        else if (typeof firstValue === 'object') {
            // tslint:disable-next-line arguments-order
            equal = deepEqualObject(secondValue, firstValue)
        }

        return equal
    }

export {
    deepEqual,
}
