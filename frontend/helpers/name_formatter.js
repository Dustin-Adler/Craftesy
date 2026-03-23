export const formatNameAsTitle = (name) => {
    return name.replace(/\b[a-z](?!\s)/g, (char) => {return char.toUpperCase()})
}

export const formatNameAsHTMLSafe = (name) => {
    return name.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-').toLowerCase();
}
