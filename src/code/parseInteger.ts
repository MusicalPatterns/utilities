import { as, DECIMAL, Integer } from '../nominal'

const parseInteger: (integerString: string, radix?: Integer) => Integer =
    (integerString: string, radix: Integer = DECIMAL): Integer =>
        as.Integer(parseInt(integerString, radix))

export {
    parseInteger,
}
