import { Cycle } from './types'

const isCycle: (maybeCycle: unknown) => maybeCycle is Cycle<unknown> =
    (maybeCycle: unknown): maybeCycle is Cycle<unknown> =>
        maybeCycle && (maybeCycle as Cycle<unknown>)._CycleBrand

export {
    isCycle,
}
