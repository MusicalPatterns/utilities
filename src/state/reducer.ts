import { Reducer } from 'redux'
import { filterActions } from 'redux-ignore'
import { TypedMap } from '../code'
import { ActionForState } from './types'

const computeReducer:
    <State extends { [key: string]: unknown }>(parameters: { initialState: TypedMap<State> }) => Reducer<TypedMap<State>, ActionForState<State>> =
    <State extends { [key: string]: unknown }>({ initialState }: { initialState: TypedMap<State> }): Reducer<TypedMap<State>, ActionForState<State>> => {
        const stateKeys: string[] = Object.keys(initialState.toJS())

        const reducer: Reducer<TypedMap<State>, ActionForState<State>> =
            (state: TypedMap<State> = initialState, action: ActionForState<State>): TypedMap<State> => {
                if (!stateKeys.includes(action.type as string)) {
                    return state
                }

                return state.set(action.type as keyof State, action.data as State[keyof State])
            }

        return filterActions(
            reducer as Reducer<TypedMap<State>>,
            stateKeys,
        ) as Reducer<TypedMap<State>, ActionForState<State>>
    }

export {
    computeReducer,
}
