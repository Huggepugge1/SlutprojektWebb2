import actionTypes from '../actions/actionTypes';
import boardInitialState from '../boardInitialState';

const boardReducer = (state = localStorage.getItem("boards") !== null ? JSON.parse(localStorage.getItem("boards")) : boardInitialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_BOARD:
            // Adds board to storage on computer, so you don't have to restart every time you refresh or open the app
            localStorage.setItem("boards", `${JSON.stringify({...state, [action.board.id]: action.board})}`);
            return {...state, [action.board.id]: action.board};

        case actionTypes.DELETE_BOARD:
            const newObj = {};
            // Filters the boards by id
            // If id matches id of the removed board, remove it
            // This way is necessary because you can not modify the store directly
            Object.keys(state).filter(e => state[e].id !== action.id).map(e => newObj[e] = state[e]);
            // Adds board to storage on computer, so you don't have to restart every time you refresh or open the app
            localStorage.setItem("boards", JSON.stringify(newObj));
            return newObj;

        default:
            return state;
    }
};

export default boardReducer;
