import React from "react";
import { Form } from 'react-bootstrap'
const TBody = ({ id, title, dueDate, thingToDo , handleChecked , Class }) => {
  return (
    <tbody>
      <tr>
        <td className={Class}>
          <Form.Check
            label={id}
            onClick={() => handleChecked(id)}
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
