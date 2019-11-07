const throws: (fn: Function) => boolean =
    (fn: Function): boolean => {
        try {
            fn()
        }
        catch (e) {
            return true
        }

        return false
    }

export {
    throws,
}
