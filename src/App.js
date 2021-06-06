import React, { useState } from "react";
import SimpleContext from "./Context/SimpleContext";
import FormGroup from "./Components/form/FormGroup";
import ListToDo from "./Components/list/ListToDo";
const App = () => {
  const [getThings, setThings] = useState([]);
  const [getDueDate, setDueDate] = useState("");
  const [getTitle, setTitle] = useState("");
  const [getSingleThing, setSingleThing] = useState("");

  const handleAddThing = () => {
    const things = [...getThings];
    const Length = getThings.length;
    const t = getDueDate.split("T");
    const singleThing = {
      id: Length + 1,
      title: getTitle,
      dueDate: t[0] + " - " + t[1],
      thingToDo: getSingleThing,
      Class: "",
    };
    if (t[1] !== undefined && getTitle !== null && getSingleThing !== "") {
      things.push(singleThing);
      setThings(things);
      setTitle("");
      setDueDate("");
      setSingleThing("");
    }
    else if( getTitle === "" ) {
      alert("Enter title !");
    }
    else if( t[1] === undefined  ) {
      alert("Enter Due Date !");
    }
    else if( getSingleThing === "" ) {
      alert("Enter things to do !");
    }
  };
  const handleOnChanged = () => {
    let thingtodo = document.getElementById("things-to-do").value;
    let duedate = document.getElementById("due-date").value;
    let title = document.getElementById("title").value;
    setDueDate(duedate);
    setTitle(title);
    setSingleThing(thingtodo);
  };

  const handleDoubleClick = () => {
    let title = prompt("Please enter title: ", "");
    let date = prompt("Please enter date: ", "2000-01-01");
    let thing = prompt("Please enter thing to do: ", "");
    const things = [...getThings];
    const Length = getThings.length;
    const singleThing = {
      id: Length + 1,
      title: title,
      dueDate: date,
      thingToDo: thing,
      Class: "",
    };
    if (title !== null && thing !== null) {
      things.push(singleThing);
      setThings(things);
    }
  };

  const handleChecked = (id) => {
    let things = [...getThings];
    const thingsIndex = things.findIndex((i) => i.id === id);
    if (things[thingsIndex].Class === "") {
      things[thingsIndex].Class = "delt";
    } else {
      things[thingsIndex].Class = "";
    }
    setThings(things);
  };

  let listtodo = null;
  if (getThings.length !== 0) {
    listtodo = <ListToDo />;
  }

  return (
    <SimpleContext.Provider
      value={{
        handleAddThing: handleAddThing,
        handleOnChanged: handleOnChanged,
        setThings: setThings,
        setSingleThing: setSingleThing,
        setDueDate: setDueDate,
        setTitle: setTitle,
        SingleThing: getSingleThing,
        DueDate: getDueDate,
        Title: getTitle,
        handleChecked: handleChecked,
        getThings: getThings,
      }}
    >
      <div className={"rtl center container"}>
        <div className={"main-card"}>
          <h1
            style={{ fontWeight: "bolder", cursor: "pointer" }}
            onDoubleClick={handleDoubleClick}
          >
            To Do List
          </h1>
          <div>
            <FormGroup />
            {listtodo}
          </div>
        </div>
      </div>
    </SimpleContext.Provider>
  );
};

export default App;
