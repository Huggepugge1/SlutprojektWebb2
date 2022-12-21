import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import AddBoard from "./components/AddBoard";
import deleteBoard from "../redux/actions/deleteBoard";
import DeleteBoard from "./components/DeleteBoard";

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <AddBoard />
                <div id={"boards"}>
                {Object.keys(this.props.boards).map(e =>
                    <div>
                        <Link className={"button small-button link flex flex-vertical flex-horizontal"} key={this.props.boards[e].id} to={`/board/${this.props.boards[e].id}`}>Go to {this.props.boards[e].name}</Link>
                        <DeleteBoard key={this.props.boards[e].id + "delete"} boardId={this.props.boards[e].id} />
                    </div>
                )}
                </div>
            </>
        )
    };
}
// Makes the store available to the class
const mapStateToProps = (state) => {
    return state;
}
// Makes the class be able to use dispatches to store
const mapDispatchToProps = (dispatch) => {
    return {
        deleteBoard: (id) => dispatch(deleteBoard(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
