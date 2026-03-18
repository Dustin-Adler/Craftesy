export const routeToProductSearchIndex = (searchString, history) => {
        const query = encodeURIComponent(searchString.trim())
        const searchPath = !query ? "/products/search" : `/products/search?q=${query}`
        const currentPath = `${history.location.pathname}${history.location.search}`
        if(currentPath !== searchPath) {
            return history.push(searchPath)
        }
    }
    