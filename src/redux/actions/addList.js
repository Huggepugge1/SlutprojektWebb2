import actionTypes from "./actionTypes";
import uniqid from 'uniqid';

const addList = (name, boardId) => {
    return {
        type: actionTypes.ADD_LIST,
        list: {
            name: name,
            // Gives every list a unique id
            id: uniqid(),
            // Id of board containing the list
            boardId: boardId
        }
    }
}
export default addList;
