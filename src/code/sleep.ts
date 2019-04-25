import { as, Delta, Ms } from '../nominal'

const sleep: (ms: Delta<Ms>) => Promise<void> =
    async (ms: Delta<Ms>): Promise<void> =>
        new Promise((resolve: VoidFunction): void => {
            setTimeout(resolve, as.number(ms))
        })

export {
    sleep,
}
