import actionTypes from "./actionTypes";

const deleteBoard = (id) => {
    return {
        type: actionTypes.DELETE_BOARD,
        // Id of board getting removed
        id: id
    }
}
export default deleteBoard;
