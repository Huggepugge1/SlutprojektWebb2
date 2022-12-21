import {connect} from "react-redux";
import deleteBoard from "../../redux/actions/deleteBoard";

const DeleteBoard = (props) => {
    const handleClick = (event) => {
        event.preventDefault();
        props.deleteBoard(props.boardId);
    }

    return <button className={"delete-list flex flex-horizontal flex-vertical button"} onClick={handleClick}>
        Delete Board {props.boards[props.boardId].name}
    </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBoard);
