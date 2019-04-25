import { Delta, Ms, notAs } from '../nominal'

const sleep: (ms: Delta<Ms>) => Promise<void> =
    async (ms: Delta<Ms>): Promise<void> =>
        new Promise((resolve: VoidFunction): void => {
            setTimeout(resolve, notAs.Delta(ms))
        })

export {
    sleep,
}
