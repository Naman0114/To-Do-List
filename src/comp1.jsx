import { useContext, useRef } from "react";
import { SiAddthis } from "react-icons/si";
import { NewTodoItems } from "./store/STodoitems";
function comp() {
    //let [takeInput, setTakeInput] = useState('');
    //let [takeDate, setTakeDate] = useState('');
    const updateInput = useRef();
    const updateDate = useRef();
    const {addNewItem}=useContext(NewTodoItems);


    /*let handleInput = (event) => {
        setTakeInput(event.target.value);

    }
    let handleDate = (event) => {
        setTakeDate(event.target.value);
    }*/
    let handleClick = (event) => {
        event.preventDefault();
        let takeInput = updateInput.current.value;
        let takeDate = updateDate.current.value;
        updateInput.current.value = "";
        updateDate.current.value = "";
        addNewItem(takeInput, takeDate);

        //setTakeInput("");
        //setTakeDate("");
    }

    return <>
        <div className="container container-all">
            <form className="row" onSubmit={handleClick}>
                <div className="col-6"><input type="text" ref={updateInput} placeholder="Enter to do here"></input></div>
                <div className="col-4"><input type="date" ref={updateDate} ></input></div>
                <div className="col-2"><button className="btn btn-success "><SiAddthis /></button></div>
            </form>
        </div>


    </>
}
export default comp;