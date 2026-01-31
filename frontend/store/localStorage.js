import { setSessionActor } from './sessionActor';

export const loadState = () => {
    try {
        const serialState = localStorage.getItem('craftesyState');
        let actor = setSessionActor();
        if (!serialState) return undefined;
        let parsedState = JSON.parse(serialState);
        if (!!actor) {
            if (actor.type === "user") {
                delete actor.type;
                parsedState.entities.users = { [actor.id]: actor };
                parsedState.entities.guest = { };
            } else {
                delete actor.type;
                parsedState.entities.guest = { [actor.id]: actor };
                parsedState.entities.users = { };
            }
        parsedState.session = { id: actor.id};
        }
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
