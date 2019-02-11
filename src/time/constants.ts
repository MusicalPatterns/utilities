// tslint:disable no-magic-numbers

import { Cardinal, to } from '../nominal'

const MILLISECONDS_PER_SECOND: Cardinal = to.Cardinal(1000)
const SECONDS_PER_MINUTE: Cardinal = to.Cardinal(60)

export {
    MILLISECONDS_PER_SECOND,
    SECONDS_PER_MINUTE,
}
