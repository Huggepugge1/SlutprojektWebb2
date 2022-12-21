import React from 'react'
import {connect} from 'react-redux';

import changeCardList from '../../redux/actions/changeCardList'
import deleteCard from "../../redux/actions/deleteCard";

class Todo extends React.Component {
    mouseDown = false;

    handleMouseDown = (event) => {
        const card = document.getElementById(this.props.todo.id);
        const len = Object.keys(this.props.lists).filter(e => this.props.boardId === this.props.lists[e].boardId).length;
        card.style.position = "absolute";
        card.style.userSelect = "none";
        card.style.width = `${(100 / len) * 0.75 * 0.6 - 3}vw`;
        card.style.left = `calc(${event.pageX}px - ${(50 / len) * 0.75 * 0.6}vw)`;
        card.style.top = `${event.pageY - 50}px`;
        this.mouseDown = true;
    }

    handleMove = (event) => {
        if (this.mouseDown) {
            const card = document.getElementById(this.props.todo.id);
            const len = Object.keys(this.props.lists).filter(e => this.props.boardId === this.props.lists[e].boardId).length;
            card.style.width = `${(100 / len) * 0.75 * 0.6 - 3}vw`;
            card.style.left = `calc(${event.pageX}px - ${(50 / len) * 0.75 * 0.6}vw)`;
            card.style.top = `${event.pageY - 50}px`;
            card.style.userSelect = "none";
        }
    }

    handleMouseUp = (event) => {
        this.mouseDown = false;
        const card = document.getElementById(this.props.todo.id);
        const len = Object.keys(this.props.lists).filter(e => this.props.boardId === this.props.lists[e].boardId).length;
        card.style.width = `${(100 / len) * 0.75 * 0.45 - 3}vw`;
        card.style.left = `calc(${event.pageX}px - ${(50 / len) * 0.75 * 0.45 - 3}vw)`;
        card.style.top = `${event.pageY - 50}px`;
        card.style.position = "static";
        card.style.top = "0";
        card.style.left = "0";
        const width = document.body.clientWidth;
        const newList = this.props.lists[Object.keys(this.props.lists).filter(e => this.props.boardId === this.props.lists[e].boardId)[Math.floor(event.pageX / (width / len))]].id
        this.props.changeCardList(this.props.todo.task, this.props.todo.id, newList);
    }

    handleRightClick = (event) => {
        event.preventDefault();
        this.props.deleteCard(this.props.todo.id);
    }

    render() {
        return (
            <div
                id={this.props.todo.id}
                 className="card"
                 onMouseDown={this.handleMouseDown}
                 onMouseMove={this.handleMove}
                 onMouseUp={this.handleMouseUp}
                 onContextMenu={this.handleRightClick}>
                {this.props.todo.task}
            </div>
        )
    }
}
// Makes the store available to the class
const mapStateToProps = (state) => {
    return state;
}
// Makes the class be able to use dispatches to store
const mapDispatchToProps = (dispatch) => {
    return {
        changeCardList: (id, newState, newList) => dispatch(changeCardList(id, newState, newList)),
        deleteCard: (id) => dispatch(deleteCard(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);