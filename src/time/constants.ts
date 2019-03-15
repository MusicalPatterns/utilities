// tslint:disable no-magic-numbers

import { Cardinal, Ms, to } from '../nominal'

const MILLISECONDS_PER_SECOND: Cardinal = to.Cardinal(1000)
const SECONDS_PER_MINUTE: Cardinal = to.Cardinal(60)

const ONE_MILLISECOND: Ms = to.Ms(1)
const ONE_SECOND: Ms = to.Ms(1000)
const ONE_MINUTE: Ms = to.Ms(60000)
const ONE_HOUR: Ms = to.Ms(3600000)
const ONE_DAY: Ms = to.Ms(86400000)

export {
    MILLISECONDS_PER_SECOND,
    SECONDS_PER_MINUTE,
    ONE_MILLISECOND,
    ONE_SECOND,
    ONE_MINUTE,
    ONE_HOUR,
    ONE_DAY,
}
