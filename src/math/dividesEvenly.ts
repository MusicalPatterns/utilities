// tslint:disable no-any

const dividesEvenly: <T1, T2>(value: T1, modulus: T2) => boolean =
    <T1, T2>(value: T1, modulus: T2): boolean =>
        value as any as number % (modulus as any as number) === 0

export {
    dividesEvenly,
}
