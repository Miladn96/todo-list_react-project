import React  from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addThings, onChanged } from "../../action/things";
const FormGroup = () => {
const title = useSelector(state => state.title);
const dueDate = useSelector(state => state.dueDate);
const singleThing = useSelector(state => state.singleThing);
const dispatch = useDispatch();


  const changeNumber = (num) => {
    if (num < 10) return "0" + num;
    else if (num >= 10) return num;
  };
  const date = new Date();
  const minDate = `${date.getFullYear()}-${
    changeNumber(date.getMonth() + 1)
  }-${changeNumber(date.getDate())}`;

  
  return (
    <Form onSubmit={(Event) => Event.preventDefault()}>
      <Form.Group>
        <div>
          <Form.Label>Title :</Form.Label>
          <Form.Control
            type="text"
            onChange={() => dispatch(onChanged())}
            placeholder="Enter Title"
            value={title}
            id="title"
          />
        </div>
        <div>
          <Form.Label>Due Date :</Form.Label>
          <Form.Control
            type="datetime-local"
            onChange={() => dispatch(onChanged())}
            min={minDate}
            value={dueDate}
            id="due-date"
          />
        </div>
      </Form.Group>
      <Form.Group>
        <div id="textArea">
          <Form.Label>Things to do :</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Enter things to do"
            onChange={() => dispatch(onChanged())}
            value={singleThing}
            id="things-to-do"
          />
        </div>
      </Form.Group>
      <Button
        type="submit"
        variant="outline-light"
        size="lg"
        className="button-submit"
        onClick={() => dispatch(addThings())}
        block
      >
        Submit
      </Button>
    </Form>
  );
};

export default FormGroup;
