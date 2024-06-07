import { useContext } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { NewTodoItems } from "./store/STodoitems";
function Item({todoName,todoDate}) {
    const { deleteItem } = useContext(NewTodoItems);


    return <>
        <div className="container  container-all">
            <div className="row item-row">
                <div className="col-6">{todoName}</div>
                <div className="col-4">{todoDate}</div>
                <div className="col-2"><button type="button" className="btn btn-danger" onClick={() => deleteItem(todoName)}><MdOutlineDeleteForever /></button></div>
            </div>
        </div>
    </>

}
export default Item;