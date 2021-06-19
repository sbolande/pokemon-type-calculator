import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import {Result} from './Result';

const Table = styled.table`
width: 60%;
margin: 20px;
`;
const TableHeader = styled.th`
padding: 15px;
text-align: center;
border-bottom: 1px solid #dddddd;
`;

function App() {
  const [typeOne, setTypeOne] = useState("");
  const [typeTwo, setTypeTwo] = useState("");

  useEffect(() => console.log(`T1: ${typeOne} | T2: ${typeTwo}`), [typeOne, typeTwo]);

  function changeType() {
    setTypeOne(document.forms.typeForm.elements.typeOne.value);
    setTypeTwo(document.forms.typeForm.elements.typeTwo.value);
  };

  return (
    <React.Fragment>
      <form id="typeForm">
        <select list="types" name="typeOne" onChange={changeType}>
          <option hidden disabled selected value=""> -- select an option -- </option>
          <option value="normal">Normal</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="ice">Ice</option>
          <option value="fighting">Fighting</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="flying">Flying</option>
          <option value="psychic">Psychic</option>
          <option value="bug">Bug</option>
          <option value="rock">Rock</option>
          <option value="ghost">Ghost</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="steel">Steel</option>
          <option value="fairy">Fairy</option>
        </select>
        &nbsp;
        <select list="types" name="typeTwo" onChange={changeType}>
          <option hidden disabled selected value=""> -- select an option -- </option>
          <option value="">None</option>
          <option value="normal">Normal</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="ice">Ice</option>
          <option value="fighting">Fighting</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="flying">Flying</option>
          <option value="psychic">Psychic</option>
          <option value="bug">Bug</option>
          <option value="rock">Rock</option>
          <option value="ghost">Ghost</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="steel">Steel</option>
          <option value="fairy">Fairy</option>
        </select>
      </form>
      <br />
      <Table id="resultTable">
        <thead>
          <tr>
            <TableHeader>&#215;2</TableHeader>
            <TableHeader>&#215;4</TableHeader>
            <TableHeader>&#215;&#189;</TableHeader>
            <TableHeader>&#215;&#188;</TableHeader>
            <TableHeader>&#215;0</TableHeader>
          </tr>
        </thead>
        <Result id="results" typeOne={typeOne} typeTwo={typeTwo}></Result>
      </Table>
    </React.Fragment>
  );
}

export default App;