import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doubleClick } from "./action/things";
import FormGroup from "./Components/form/FormGroup";
import ListToDo from "./Components/list/ListToDo";
const App = () => {
  const things = useSelector((state) => state.things);
  const dispatch = useDispatch();
  return (
      <div className={"rtl center container"}>
        <div className={"main-card"}>
          <h1
            style={{ fontWeight: "bolder", cursor: "pointer" }}
            onDoubleClick={() => dispatch(doubleClick())}
          >
            To Do List
          </h1>
          <div>
            <FormGroup />
            {things.length !== 0 ? <ListToDo /> : null}
          </div>
        </div>
      </div>
  );
};

export default App;
