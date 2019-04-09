import { sleep } from '../code'
import { GOOD_AMOUNT_OF_TIME_TO_SEE_WHAT_THE_SITUATION_IS_WHEN_HEADFULLY_DEBUGGING_TESTS } from '../nominal'

const waitForHeadfulQaing: () => Promise<void> =
    async (): Promise<void> => {
        await sleep(GOOD_AMOUNT_OF_TIME_TO_SEE_WHAT_THE_SITUATION_IS_WHEN_HEADFULLY_DEBUGGING_TESTS)
    }

export {
    waitForHeadfulQaing,
}
