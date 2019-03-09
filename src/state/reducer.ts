import { Reducer } from 'redux'
import { TypedMap } from '../code'
import { ActionForState } from './types'

const buildReducer:
    <State>(parameters: { initialState: TypedMap<State> }) => Reducer<TypedMap<State>, ActionForState<State>> =
    <State>({ initialState }: { initialState: TypedMap<State> }): Reducer<TypedMap<State>, ActionForState<State>> => {
        const stateKeys: string[] = Object.keys(initialState.toJS())

        return (state: TypedMap<State> = initialState, action: ActionForState<State>): TypedMap<State> => {
            if (!stateKeys.includes(action.type as string)) {
                return state
            }

            return state.set(action.type as keyof State, action.data as State[keyof State])
        }
    }

export {
    buildReducer,
}
