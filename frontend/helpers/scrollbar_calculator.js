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

export const appendOrRemoveScrollBarReplacement = () => {
    let scrollReplacement = document.getElementsByClassName("scrollbar-replacement")
    if (scrollReplacement.length) {
        console.log("removing scroll replacement")
        document.body.style.gridTemplateColumns = '1fr';
        document.body.removeChild(scrollReplacement[0])
    } else {
        console.log("appending scroll replacement", scrollReplacement.offsetWidth)
        scrollReplacement = createScrollBarDivReplacement();
        document.body.appendChild(scrollReplacement);
        document.body.style.gridTemplateColumns = `1fr ${scrollReplacement.offsetWidth}px`;
    }
}