import { DECIMAL, Integer, to } from '../nominal'

const parseInteger: (integerString: string, radix?: Integer) => Integer =
    (integerString: string, radix: Integer = DECIMAL): Integer =>
        to.Integer(parseInt(integerString, radix))

export {
    parseInteger,
}
