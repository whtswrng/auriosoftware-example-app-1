export function waitFor(timeInMs: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, timeInMs));
}