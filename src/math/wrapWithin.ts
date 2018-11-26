const wrapWithin: <T>(n: T, within: number) => T =
    <T>(n: T, within: number): T => {
        // @ts-ignore
        let newN: number = n as number

        while (newN < 0) {
            newN += within
        }
        while (newN >= within) {
            newN -= within
        }

        // @ts-ignore
        return newN as T
    }

export {
    wrapWithin,
}
