import React from "react";
import {  Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { checked } from "../../action/things";
import TBody from './TBody'
const TableToDo = () => {
  const things = useSelector(state => state.things);
  const dispatch = useDispatch();
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
      {things.map((t) => (
        <TBody
            key={t.id}
            id={t.id}
            title={t.title}
            dueDate={t.dueDate}
            thingToDo={t.thingToDo}
            handleChecked={() => dispatch(checked())}
            Class={t.Class}
        />
      ))}
    </Table>
  );
};

export default TableToDo;
