import { Cycle } from './types'

const isCycle: (value: unknown) => value is Cycle<unknown> =
    (value: unknown): value is Cycle<unknown> =>
        value && (value as Cycle<unknown>)._CycleBrand

export {
    isCycle,
}
