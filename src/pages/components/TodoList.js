import React from 'react'
import {connect} from 'react-redux';
import AddCard from './AddCard';

import Todo from './Todo';
import DeleteList from "./DeleteList";

class TodoList extends React.Component {
    // Sets width of list to about 1 / (number of lists in board) of the screen width
    styling = () => {
        const list = document.getElementById(`list${this.props.listId}`);
        const len = Object.keys(this.props.lists).filter(e => this.props.lists[e].boardId === this.props.boardId).length;
        list.style.width = `${100 / len - 3}vw`;
    };
    // This is needed so that the program can stop updating the styling after the component is removed
    stylingInterval;
    // When component is rendered, start styling
    componentDidMount() {
        this.stylingInterval = setInterval(this.styling, 100);
    }
    // Right before component is removed, remove styling of component
    componentWillUnmount() {
        clearInterval(this.stylingInterval);
    }
    // Get the cards associated with current list
    getCards = () => {
        return this.props.cards.filter(e => e.listId === this.props.listId);
    };

    render() {
        return (
            <div id={`list${this.props.listId}`} className="card-list">
                <h2 className={"flex flex-horizontal flex-vertical"}>Right click card to remove it</h2>
                <AddCard listId={this.props.listId}/>
                <DeleteList listId={this.props.listId}/>
                <div className="card-container">
                    {this.getCards().map((e) => <Todo key={e.id} listId={this.props.listId} todo={e} boardId={this.props.boardId} />)}
                </div>
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
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);