import React from 'react';
import { connect } from 'react-redux';

import addCard from '../../redux/actions/addCard';

class AddCard extends React.Component {
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
    // Add card to store on submit
    handleSubmit(e) {
        if (this.state.value === "") return;
        e.preventDefault();
        this.props.addCard(this.props.listId, this.state.value);
        this.setState({value: ""});
    }

    render() {
        return (
            <div className="add-todo flex flex-wrap">
                <h1 className="flex flex-horizontal flex-vertical">{this.props.lists[this.props.listId].name}</h1>
                <input type="text" onChange={this.handleChange} value={this.state.value} placeholder={"New Task"}/>
                <button id={`add-todo-button${this.props.listId}`} className="flex flex-vertical flex-horizontal button small-button" onClick={this.handleSubmit}>Add Card</button>
            </div>
        )
    }
}
// Makes the store available to the class
const mapStateToProps = (state) => {
    return state;
}
// Maps dispatches to the class and makes the class be able to use dispatches to store
const mapDispatchToProps = (dispatch) => {
    return {
        addCard: (listId, task) => dispatch(addCard(listId, task))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
