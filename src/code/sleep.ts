import { Ms, notAs, Point, Translation } from '../nominal'

const sleep: (ms: Translation<Point<Ms>>) => Promise<void> =
    async (ms: Translation<Point<Ms>>): Promise<void> =>
        new Promise((resolve: VoidFunction): void => {
            setTimeout(resolve, notAs.Translation(ms))
        })

export {
    sleep,
}
