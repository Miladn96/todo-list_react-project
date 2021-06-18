import { clear } from "./clear";

export const addThings = () => {
  return async (dispatch, getState) => {
    const Things = [...getState().things];
    const Length = Things.length;
    const t = getState().dueDate.split("T");
    const thing = {
      id: Length + 1,
      title: getState().title,
      dueDate: t[0] + " - " + t[1],
      thingToDo: getState().singleThing,
      Class: "",
    };
    if (
      t[1] !== undefined &&
      getState().title !== null &&
      getState().singleThing !== ""
    ) {
      Things.push(thing);
      await dispatch({ type: "ADD_THING", payload: Things });
      await dispatch(clear());
    } else if (getState().title === "") {
      alert("Enter title !");
    } else if (t[1] === undefined) {
      alert("Enter Due Date !");
    } else if (getState().singleThing === "") {
      alert("Enter things to do !");
    }
  };
};

export const onChanged = () => {
  return async (dispatch) => {
    let thingtodo = document.getElementById("things-to-do").value;
    let duedate = document.getElementById("due-date").value;
    let title = document.getElementById("title").value;
    await dispatch({ type: "SET_DUEDATE", payload: duedate });
    await dispatch({ type: "SET_SINGLETHING", payload: thingtodo });
    await dispatch({ type: "SET_TITLE", payload: title });
  };
};

export const doubleClick = () => {
  return async (dispatch, getState) => {
    let title = prompt("Please enter title: ", "");
    let date = prompt("Please enter date: ", "2000-01-01");
    let thing = prompt("Please enter thing to do: ", "");

    const things = [...getState().things];
    const Length = things.length;
    const singleThing = {
      id: Length + 1,
      title: title,
      dueDate: date,
      thingToDo: thing,
      Class: "",
    };

    if (title !== null && thing !== null) {
      things.push(singleThing);
      await dispatch({ type: "ADD_THING", payload: things });
    }
  };
};

export const checked = (thingId) => {
  return async (dispatch, getState) => {
    let things = [...getState().things];
    const thingsIndex = thingId - 1;
    if (things[thingsIndex].Class === "") {
      things[thingsIndex].Class = "delt";
    } else {
      things[thingsIndex].Class = "";
    }
    await dispatch({ type: "CHECKED", payload: things });
  };
};
