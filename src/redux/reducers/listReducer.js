import listInitialState from "../listInitialState"

const listReducer = (state = localStorage.getItem("lists") !== null ? JSON.parse(localStorage.getItem("lists")) : listInitialState, action) => {
    switch (action.type) {
        case "ADD_LIST":
            // Adds list to storage on computer, so you don't have to restart every time you refresh or open the app
            localStorage.setItem("lists", JSON.stringify({...state, [action.list.id]: action.list}));
            return {...state, [action.list.id]: action.list};

        case "DELETE_LIST":
            const newObj = {};
            // Filters the boards by id
            // If id matches id of the removed board, remove it
            // This way is necessary because you can not modify the store directly
            Object.keys(state).filter(e => state[e].id !== action.id).map(e => newObj[e] = state[e]);
            // Adds list to storage on computer, so you don't have to restart every time you refresh or open the app
            localStorage.setItem("lists", JSON.stringify(newObj));
            return newObj;

        default:
            return state;
    }
};

export default listReducer;