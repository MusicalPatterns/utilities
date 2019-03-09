import { DictionaryOf } from '../code'

type ActionForState<State extends DictionaryOf<unknown>, StateKey extends keyof State = string> =
    StateKey extends string ?
        { data?: State[StateKey], type: StateKey } :
        never

export {
    ActionForState,
}
