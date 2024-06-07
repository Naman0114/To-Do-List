import { createContext, useReducer } from "react";
export const NewTodoItems = createContext([]);

let itemsReducer = (currValue, action) => {
    let newValue = currValue;
    if (action.type === "Add_Item") {
        if (action.post.getInput !== "" && action.post.getDate !== "") {
            newValue = [...currValue, { name: action.post.getInput, dueDate: action.post.getDate },];
        }
    } else if (action.type === "Delete_Item") {
        newValue = currValue.filter((item) => { item.name !== action.post.itemName });
    }
    return newValue;
}

const Add_delete = ({ children }) => {
    const [takeValue, dispatchTakeValue] = useReducer(itemsReducer, []);
    const addNewItem = (getInput, getDate) => {
        let newItemAction = {
            type: "Add_Item",
            post: {
                getInput,
                getDate
            }
        };
        dispatchTakeValue(newItemAction);
    }
    const deleteItem = (getInput) => {
        const deleteItemAction = {
            type: "Delete_Item",
            post: {
                itemName: getInput
            }
        };
        dispatchTakeValue(deleteItemAction)
    }
    return (
        <NewTodoItems.Provider value={{ takeValue, addNewItem, deleteItem }}>
            {children}
        </NewTodoItems.Provider>
    )
};
export default Add_delete;