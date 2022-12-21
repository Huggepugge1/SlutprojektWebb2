import actionTypes from "./actionTypes";

const addCard = (id) => {
    return {
        type: actionTypes.DELETE_CARD,
        // Id of card getting removed
        id: id
    }
}
export default addCard;
