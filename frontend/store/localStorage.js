import { setSessionActor } from './sessionActor';

export const loadState = () => {
    try {
        const serialState = localStorage.getItem('craftesyState');
        if (serialState === null) {
            return undefined;
        }
        let parsedState = JSON.parse(serialState);
        let actor = setSessionActor();
        if (actor.type === "user") {
            delete actor.type;
            parsedState.entities.users = { [actor.id]: actor };
        } else if (actor.type === "guest") {
            delete actor.type;
            parsedState.entities.guest = { [actor.id]: actor };
        }
        parsedState.session = { id: actor.id};
        return parsedState;
    } catch(err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serialState = JSON.stringify(state)
        localStorage.setItem('craftesyState', serialState)
    } catch(err) {
        console.log(err)
    }
};
