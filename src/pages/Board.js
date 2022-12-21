import React from 'react';
import BoardManager from './components/AddList';

import TodoList from './components/TodoList';
import {connect} from "react-redux";
import {useParams} from "react-router";

function Board(props) {
    const boardId = useParams().id;
    return (
        <>
            <BoardManager boardId={boardId}/>
            <div className="flex flex-wrap container">
                {Object.keys(props.lists).filter(e => props.lists[e].boardId === boardId).map(e => <TodoList key={props.lists[e].id} listId={props.lists[e].id} boardId={boardId}/>)}
            </div>
        </>
    )
}
// Makes the store available to the class
const mapStateToProps = (state) => {
    return state;
}
// Makes the class be able to use dispatches to store
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Board);