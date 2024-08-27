import React, { useState } from "react";
import { Table } from "react-bootstrap";

const Tabela = () => {
  const [Teacher, setTeacher] = useState([
    {
      id: 1,
      teacher_name: "Gezim",
      teacher_branch: "Matematik",
      kreditet: 15,
    },
    {
      id: 2,
      teacher_name: "Agron",
      teacher_branch: "Fizik",
      kreditet: 10,
    },
    {
      id: 3,
      teacher_name: "Besi",
      teacher_branch: "Gjuh letersi",
      kreditet: 12,
    },
    {
      id: 4,
      teacher_name: "Diana",
      teacher_branch: "Fiskultur",
      kreditet: 8,
    },
    {
      id: 5,
      teacher_name: "Teuta",
      teacher_branch: "Gjeografi",
      kreditet: 10,
    },
  ]);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Petagogu</th>
          <th>Lenda</th>
          <th>Kreditet</th>
        </tr>
      </thead>
      <tbody>
        {Teacher.map((Teacher) => {
          return (
            <tr key={Teacher.id}>
              <td>{Teacher.id}</td>
              <td>{Teacher.teacher_name}</td>
              <td>{Teacher.teacher_branch}</td>
              <td>{Teacher.kreditet}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabela;
