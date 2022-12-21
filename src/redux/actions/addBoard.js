import actionTypes from "./actionTypes";
import uniqid from 'uniqid';

const addBoard = (name) => {
    return {
        type: actionTypes.ADD_BOARD,
        board: {
            name: name,
            // Gives every new board a unique id
            id: uniqid(),
        }
    }
}
export default addBoard;
