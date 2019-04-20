import { Ms, notAs } from '../nominal'

const sleep: (ms: Ms) => Promise<void> =
    async (ms: Ms): Promise<void> =>
        new Promise((resolve: VoidFunction): void => {
            setTimeout(resolve, notAs.Ms(ms))
        })

export {
    sleep,
}
