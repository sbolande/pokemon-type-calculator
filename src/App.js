import React from 'react';
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
  function changeType() {
    var typeOne = document.forms.typeForm.elements.typeOne.value;
    var typeTwo = document.forms.typeForm.elements.typeTwo.value;
    if (typeOne === "") typeOne = null;
    if (typeTwo === "") typeTwo = null;
    console.log(typeOne);
    console.log(typeTwo);
    var results = document.getElementById('results');
    results = <Result typeOne={typeOne} typeTwo={typeTwo}></Result>;
  };

  return (
    <React.Fragment>
      <form id="typeForm">
        <label>
          Type 1:&nbsp;
          <select list="types" name="typeOne" onChange={changeType}>
            <option hidden disabled selected value=""> -- select an option -- </option>
            <option value="Normal">Normal</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Grass">Grass</option>
            <option value="Electric">Electric</option>
            <option value="Ice">Ice</option>
            <option value="Fighting">Fighting</option>
            <option value="Poison">Poison</option>
            <option value="Ground">Ground</option>
            <option value="Flying">Flying</option>
            <option value="Psychic">Psychic</option>
            <option value="Bug">Bug</option>
            <option value="Rock">Rock</option>
            <option value="Ghost">Ghost</option>
            <option value="Dragon">Dragon</option>
            <option value="Dark">Dark</option>
            <option value="Steel">Steel</option>
            <option value="Fairy">Fairy</option>
          </select>
        </label>
        <br/>
        <label>
          Type 2:&nbsp;
          <select list="types" name="typeTwo" onChange={changeType}>
            <option hidden disabled selected value=""> -- select an option -- </option>
            <option value="">None</option>
            <option value="Normal">Normal</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Grass">Grass</option>
            <option value="Electric">Electric</option>
            <option value="Ice">Ice</option>
            <option value="Fighting">Fighting</option>
            <option value="Poison">Poison</option>
            <option value="Ground">Ground</option>
            <option value="Flying">Flying</option>
            <option value="Psychic">Psychic</option>
            <option value="Bug">Bug</option>
            <option value="Rock">Rock</option>
            <option value="Ghost">Ghost</option>
            <option value="Dragon">Dragon</option>
            <option value="Dark">Dark</option>
            <option value="Steel">Steel</option>
            <option value="Fairy">Fairy</option>
          </select>
        </label>
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
        <Result id="results"></Result>
      </Table>
    </React.Fragment>
  );
}

export default App;