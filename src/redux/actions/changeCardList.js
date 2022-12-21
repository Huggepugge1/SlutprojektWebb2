import actionTypes from "./actionTypes";

const changeCardList = (task, cardId, newList) => {
    return {
        type: actionTypes.CHANGE_CARD_LIST,
        card: {
            // Id of card changing list
            id: cardId,
            task: task,
            // Id of the new list
            listId: newList
        }
    }
}

export default changeCardList;