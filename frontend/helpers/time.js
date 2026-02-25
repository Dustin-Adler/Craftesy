export const debounce = (func, delay) => {
    let timeoutId;

    const debouncedFunc = (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }

    return debouncedFunc;
}
