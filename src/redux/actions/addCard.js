import actionTypes from "./actionTypes";
import uniqid from 'uniqid';

const addCard = (listId, task) => {
    return {
        type: actionTypes.ADD_CARD,
        card: {
            // Gives every card a unique id
            id: uniqid(),
            task: task,
            // Id of list containing the card
            listId: listId
        }
    }
}
export default addCard;