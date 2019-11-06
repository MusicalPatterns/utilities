import { as, Integer, Monzo } from '../nominal'

const primeFactorize: (integer: Integer) => Monzo =
    (integer: Integer): Monzo => {
        if (integer === 0) {
            throw new Error('The prime factorization of zero is not defined.')
        }

        return as.Monzo([])
    }

export {
    primeFactorize,
}
