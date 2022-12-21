import React from 'react';
import { connect } from 'react-redux';

import addBoard from "../../redux/actions/addBoard";

class AddBoard extends React.Component {
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
    // When submitted, tell store to add a board
    handleSubmit(e) {
        if (this.state.value === "") return;
        e.preventDefault();
        this.props.addBoard(this.state.value);
        this.setState({value: ""});
    }

    render() {
        return (
            <div className="flex flex-wrap flex-horizontal" id={"board-manager"}>
                <h1>Add Board</h1>
                <input type="text" onChange={this.handleChange} value={this.state.value} placeholder={"New Board"}/>
                <button id={"add-board-button"} className="flex flex-vertical flex-horizontal button big-button" onClick={this.handleSubmit}>Add Board</button>
            </div>
        )
    }
}
// Makes the store available to the class
const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBoard: (name) => dispatch(addBoard(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBoard);
