const getClientScrollbarWidth = () => {
    const scrollDiv = document.createElement("div");
    scrollDiv.className = "scrollbar-width-calc";
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
}

const createScrollBarDivReplacement = () => {
    const scrollbarWidth = getClientScrollbarWidth();
    let scrollReplacement = document.createElement("div");
    scrollReplacement.className = "scrollbar-replacement";
    scrollReplacement.style.width = `${scrollbarWidth}px`;
    return scrollReplacement;
}

export const appendOrRemoveScrollBarReplacement = (addScrollReplacement = true) => {
    let scrollReplacement = document.getElementsByClassName("scrollbar-replacement")
    if (scrollReplacement.length && !addScrollReplacement) {
        for (let replacement of scrollReplacement) {
            document.body.removeChild(replacement);
        }
        document.body.style.gridTemplateColumns = '1fr';
        document.body.className = '';
    } else if (!scrollReplacement.length && addScrollReplacement) {
        scrollReplacement = createScrollBarDivReplacement();
        document.body.appendChild(scrollReplacement);
        document.body.style.gridTemplateColumns = `1fr ${scrollReplacement.offsetWidth}px`;
        document.body.className = 'no-scroll';
    }
}
