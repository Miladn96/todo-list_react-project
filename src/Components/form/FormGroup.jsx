import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import SimpleContext from "../../Context/SimpleContext";
const FormGroup = () => {
  const changeNumber = (num) => {
    if (num < 10) return "0" + num;
    else if (num >= 10) return num;
  };
  const context = useContext(SimpleContext);
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
            onChange={context.handleOnChanged}
            placeholder="Enter Title"
            value={context.Title}
            id="title"
          />
        </div>
        <div>
          <Form.Label>Due Date :</Form.Label>
          <Form.Control
            type="datetime-local"
            onChange={context.handleOnChanged}
            min={minDate}
            value={context.DueDate}
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
            onChange={context.handleOnChanged}
            value={context.SingleThing}
            id="things-to-do"
          />
        </div>
      </Form.Group>
      <Button
        type="submit"
        variant="outline-light"
        size="lg"
        className="button-submit"
        onClick={context.handleAddThing}
        block
      >
        Submit
      </Button>
    </Form>
  );
};

export default FormGroup;
