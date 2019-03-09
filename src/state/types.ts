type ActionForState<State, StateKey = keyof State> =
    StateKey extends keyof State ?
        { data?: State[StateKey], type: StateKey } :
        never

export {
    ActionForState,
}
