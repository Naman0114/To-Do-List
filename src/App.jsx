import "./App.css";
import AppsName from "./AppsName";
import Component from './Component';
import Comp from "./comp1";
import Items from "./items";
import Add_delete from "./store/STodoitems";

function App() {
  return <>
    <Component>
      <Add_delete>
        <center className="todo-container">
          <AppsName></AppsName>
          <Comp></Comp>
          <Items></Items>
        </center>
      </Add_delete>
    </Component>

  </>
}
export default App
