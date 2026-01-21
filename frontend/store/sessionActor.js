import { receiveCurrentUser } from "../actions/session_actions";

export const getSessionActor = () => {
    let sessionActor = null;
    window.currentGuest == undefined ? sessionActor = window.currentUser : sessionActor = window.currentGuest;
    return sessionActor;
}