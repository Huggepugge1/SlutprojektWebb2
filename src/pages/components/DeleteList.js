import {connect} from "react-redux";
import deleteList from "../../redux/actions/deleteList";

const DeleteList = (props) => {
    const handleClick = (event) => {
        // Prevents the default behaviour of clicking the element
        // In this case, right click does not open up the normal menu
        event.preventDefault();
        props.deleteList(props.listId);
    }

    return <div className={"flex flex-horizontal flex-vertical"}>
        <button className={"delete-list button"} onClick={handleClick}>
            Delete list {props.lists[props.listId].name}
        </button>
    </div>
}
// Makes the store available to the class
const mapStateToProps = (state) => {
    return state;
}
// Makes the class be able to use dispatches to store
const mapDispatchToProps = (dispatch) => {
    return {
        deleteList: (id) => dispatch(deleteList(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteList);
