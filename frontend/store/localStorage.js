export const loadState = () => {
    try {
        const serialState = localStorage.getItem('craftesyState');
        if (serialState === null) {
            return undefined;
        }
        return JSON.parse(serialState);
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

// export const loadGuest = () => {
//     try {
//         const serialGuest = localStorage.getItem('guestUUID');
//         if (serialGuest === null) {
//             return undefined;
//         }
//         return JSON.parse(serialGuest);
//     } catch(err) {
//         return undefined;
//     }
// };

// export const saveGuest = (guest) => {
//     try {
//         const serialGuest = JSON.stringify(guest)
//         localStorage.setItem('guestUUID', serialGuest)
//     } catch(err) {
//         console.log(err)
//     }
// }; 