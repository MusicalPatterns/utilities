import { Ms, notAs, Translation } from '../nominal'

const sleep: (ms: Translation<Ms>) => Promise<void> =
    async (ms: Translation<Ms>): Promise<void> =>
        new Promise((resolve: VoidFunction): void => {
            setTimeout(resolve, notAs.Translation(ms))
        })

export {
    sleep,
}
