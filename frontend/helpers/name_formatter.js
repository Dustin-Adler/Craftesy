export const formatNameAsTitle = (name) => {
    return name.replace(/\b[a-z](?!\s)/g, (char) => {return char.toUpperCase()})
}