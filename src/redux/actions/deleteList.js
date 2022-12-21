import actionTypes from "./actionTypes";

const deleteList = (id) => {
    return {
        type: actionTypes.DELETE_LIST,
        // Id of list getting removed
        id: id
    }
}
export default deleteList;