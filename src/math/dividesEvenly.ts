// tslint:disable no-any

const dividesEvenly: <T1, T2>(value: T1, modulus: T2) => boolean =
    <T1, T2>(value: T1, modulus: T2): boolean =>
        value as unknown as number % (modulus as unknown as number) === 0

export {
    dividesEvenly,
}
