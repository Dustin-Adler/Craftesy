export const setSessionActor = () => {
    if (window.currentGuest == undefined) {
        return {...window.currentUser, type: "user"};
    } else {
        return {...window.currentGuest, type: "guest"};
    }
}
