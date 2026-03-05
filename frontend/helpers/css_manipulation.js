export const addClass = (elementId, className) => {
    const element = document.getElementById(elementId);
    if (!element.classList.contains(className)) {
        element.classList.add(className);
    }
}

export const removeClass = (elementId, className) => {
    const element = document.getElementById(elementId);
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    }
}

export const toggleClass = (elementId, className) => {
    const element = document.getElementById(elementId);
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}
