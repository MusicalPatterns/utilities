const doAsync: (fn: VoidFunction) => void =
    (fn: VoidFunction): void => {
        setTimeout(fn, 0)
    }

export {
    doAsync,
}
