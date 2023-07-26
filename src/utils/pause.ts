export const pause = (ms: number) => new Promise<void>((resolve) => {
    setTimeout(resolve, ms)
})
export const pauseButton = (ms: number) => new Promise<void>((resolve) => {
    setTimeout(resolve, ms)
})