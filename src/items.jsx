import { useContext } from "react";
import Item from "./item";
import { NewTodoItems } from "./store/STodoitems";
function Items() {
    const { takeValue } = useContext(NewTodoItems);
    return (
        <div className="todo-container">
            {takeValue.map((item) => (<Item todoName={item.name} todoDate={item.dueDate}></Item>))}
        </div>
    );

}
export default Items;