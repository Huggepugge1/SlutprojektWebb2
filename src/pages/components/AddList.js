import React from 'react';
import { connect } from 'react-redux';

import addList from "../../redux/actions/addList";

class AddList extends React.Component {
    constructor(props) {
        super(props);
        // Current input value
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // Controlled input
    handleChange(e) {
        this.setState({value: e.target.value});
    }
    // On submit, add board to store
    handleSubmit(e) {
        if (this.state.value === "") return;
        e.preventDefault();
        this.props.addList(this.state.value, this.props.boardId);
        this.setState({value: ""});
    }

    render() {
        return (
            <div className="flex flex-wrap flex-vertical flex-horizontal" id={"board-manager"}>
                <h1>{this.props.boards[this.props.boardId].name}</h1>
                <input type="text" onChange={this.handleChange} value={this.state.value} placeholder={"New List"}/>
                <button id={"add-list-button"} className="flex flex-vertical flex-horizontal button big-button" onClick={this.handleSubmit}>Add List</button>
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
        addList: (name, boardId) => dispatch(addList(name, boardId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddList);