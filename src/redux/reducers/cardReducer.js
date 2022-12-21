import actionTypes from '../actions/actionTypes';
import cardInitialState from '../cardInitialState';

const cardReducer = (state = localStorage.getItem("cards") !== null ? JSON.parse(localStorage.getItem("cards")) : cardInitialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CARD:
            // Adds card to storage on computer, so you don't have to restart every time you refresh or open the app
            localStorage.setItem("cards", JSON.stringify([...state, action.card]));
            return [...state, action.card];

        case actionTypes.CHANGE_CARD_LIST:
            const newState = state.filter(e => e.id !== action.card.id);
            // Adds card to storage on computer, so you don't have to restart every time you refresh or open the app
            localStorage.setItem("cards", JSON.stringify(newState));
            return [...newState, action.card];

        case actionTypes.DELETE_CARD:
            // Adds card to storage on computer, so you don't have to restart every time you refresh or open the app
            localStorage.setItem("cards", JSON.stringify(state.filter(e => e.id !== action.id)));
            // Filters the cards by id
            // If id matches id of the removed card, remove it
            // This way is necessary because you can not modify the store directly
            return state.filter(e => e.id !== action.id);

        default:
            return state;
    }
};

export default cardReducer;