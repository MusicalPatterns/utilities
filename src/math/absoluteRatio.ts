const absoluteRatio: (ratio: number) => number =
    (ratio: number): number => ratio < 1 ? ratio : 1 / ratio

export {
    absoluteRatio,
}
