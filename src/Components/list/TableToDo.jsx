import React, { useContext } from "react";
import {  Table } from "react-bootstrap";
import SimpleContext from "../../Context/SimpleContext";
import TBody from './TBody'
const TableToDo = () => {
  const context = useContext(SimpleContext);
  const { getThings } = context;
  return (
    <Table striped bordered hover variant="dark" className="mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Due Date</th>
          <th>Things to do</th>
        </tr>
      </thead>
      {getThings.map((t) => (
        <TBody
            key={t.id}
            id={t.id}
            title={t.title}
            dueDate={t.dueDate}
            thingToDo={t.thingToDo}
            handleChecked={context.handleChecked}
            Class={t.Class}
        />
      ))}
    </Table>
  );
};

export default TableToDo;
