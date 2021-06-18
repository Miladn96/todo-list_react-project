import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { checked } from "../../action/things";
const TBody = ({ id, title, dueDate, thingToDo, handleChecked, Class }) => {
  const dispatch = useDispatch();
  return (
    <tbody>
      <tr>
        <td className={Class}>
          <Form.Check
            label={id}
            onClick={() => dispatch(checked(id))}
            inline
          />
        </td>
        <td className={Class}> {title} </td>
        <td className={Class}> {dueDate} </td>
        <td className={Class}> {thingToDo} </td>
      </tr>
    </tbody>
  );
};

export default TBody;
