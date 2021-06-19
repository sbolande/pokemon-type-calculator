import React from 'react';
import styled from 'styled-components';
// import TypeCell from './components/Type';
const types = require('./types.json');

const duplicates = (val, index, self) => self.indexOf(val) !== index;
const uniques = (val, index, self) => {
    if (!self.filter(duplicates).includes(val)) return true;
    else return false;
};

function getTypeData(one, two = "") {
    console.log(types);
    console.log(one);
    console.log(two);

    var typeData = {
        superEffective: [],
        doubleEffective: [],
        notEffective: [],
        doubleNotEffective: [],
        noEffect: []
    };

    if (one === "") return typeData;

    var oneSuper = types[one]?.superEffective;
    var twoSuper = types[two]?.superEffective;
    var oneNotEffective = types[one]?.notEffective;
    var twoNotEffective = types[two]?.notEffective;
    var oneNoEffect = types[one]?.noEffect;
    var twoNoEffect = types[two]?.noEffect;

    typeData = {
        superEffective: oneSuper?.concat(twoSuper).filter(uniques) ?? [],
        doubleEffective: oneSuper?.concat(twoSuper).filter(duplicates) ?? [],
        notEffective: oneNotEffective?.concat(twoNotEffective).filter(uniques) ?? [],
        doubleNotEffective: oneNotEffective?.concat(twoNotEffective).filter(duplicates) ?? [],
        noEffect: oneNoEffect?.concat(twoNoEffect).filter(uniques) ?? []
    }
    console.log(typeData);
    return typeData;
};

const TableRow = styled.tr`&:hover { background-color: #f5f5f5 }`;
const Type = styled.td`
padding: 5px;
text-align: center;
border-radius: 50px;
height: 20px;
`;

export const Result = (props) =>{
    if (props.typeOne === null || props.typeOne === "") return null;
    var typeData = getTypeData(props.typeOne, props.typeTwo);
    return (
        <tbody>
            <TableRow>
                <Type className={typeData.superEffective[0]}>{typeData.superEffective[0] ?? ""}</Type>
                <Type className={typeData.doubleEffective[0]}>{typeData.doubleEffective[0] ?? ""}</Type>
                <Type className={typeData.notEffective[0]}>{typeData.notEffective[0] ?? ""}</Type>
                <Type className={typeData.doubleNotEffective[0]}>{typeData.doubleNotEffective[0] ?? ""}</Type>
                <Type className={typeData.noEffect[0]}>{typeData.noEffect[0] ?? ""}</Type>
            </TableRow>
            <TableRow>
                <Type className={typeData.superEffective[1]}>{typeData.superEffective[1] ?? ""}</Type>
                <Type className={typeData.doubleEffective[1]}>{typeData.doubleEffective[1] ?? ""}</Type>
                <Type className={typeData.notEffective[1]}>{typeData.notEffective[1] ?? ""}</Type>
                <Type className={typeData.doubleNotEffective[1]}>{typeData.doubleNotEffective[1] ?? ""}</Type>
                <Type className={typeData.noEffect[1]}>{typeData.noEffect[1] ?? ""}</Type>
            </TableRow>
            <TableRow>
                <Type className={typeData.superEffective[2]}>{typeData.superEffective[2] ?? ""}</Type>
                <Type className={typeData.doubleEffective[2]}>{typeData.doubleEffective[2] ?? ""}</Type>
                <Type className={typeData.notEffective[2]}>{typeData.notEffective[2] ?? ""}</Type>
                <Type className={typeData.doubleNotEffective[2]}>{typeData.doubleNotEffective[2] ?? ""}</Type>
                <Type className={typeData.noEffect[2]}>{typeData.noEffect[2] ?? ""}</Type>
            </TableRow>
            <TableRow>
                <Type className={typeData.superEffective[3]}>{typeData.superEffective[3] ?? ""}</Type>
                <Type className={typeData.doubleEffective[3]}>{typeData.doubleEffective[3] ?? ""}</Type>
                <Type className={typeData.notEffective[3]}>{typeData.notEffective[3] ?? ""}</Type>
                <Type className={typeData.doubleNotEffective[3]}>{typeData.doubleNotEffective[3] ?? ""}</Type>
                <Type className={typeData.noEffect[3]}>{typeData.noEffect[3] ?? ""}</Type>
            </TableRow>
            <TableRow>
                <Type className={typeData.superEffective[4]}>{typeData.superEffective[4] ?? ""}</Type>
                <Type className={typeData.doubleEffective[4]}>{typeData.doubleEffective[4] ?? ""}</Type>
                <Type className={typeData.notEffective[4]}>{typeData.notEffective[4] ?? ""}</Type>
                <Type className={typeData.doubleNotEffective[4]}>{typeData.doubleNotEffective[4] ?? ""}</Type>
                <Type className={typeData.noEffect[4]}>{typeData.noEffect[4] ?? ""}</Type>
            </TableRow>
            <TableRow>
                <Type className={typeData.superEffective[5]}>{typeData.superEffective[5] ?? ""}</Type>
                <Type className={typeData.doubleEffective[5]}>{typeData.doubleEffective[5] ?? ""}</Type>
                <Type className={typeData.notEffective[5]}>{typeData.notEffective[5] ?? ""}</Type>
                <Type className={typeData.doubleNotEffective[5]}>{typeData.doubleNotEffective[5] ?? ""}</Type>
                <Type className={typeData.noEffect[5]}>{typeData.noEffect[5] ?? ""}</Type>
            </TableRow>
            <TableRow>
                <Type className={typeData.superEffective[6]}>{typeData.superEffective[6] ?? ""}</Type>
                <Type className={typeData.doubleEffective[6]}>{typeData.doubleEffective[6] ?? ""}</Type>
                <Type className={typeData.notEffective[6]}>{typeData.notEffective[6] ?? ""}</Type>
                <Type className={typeData.doubleNotEffective[6]}>{typeData.doubleNotEffective[6] ?? ""}</Type>
                <Type className={typeData.noEffect[6]}>{typeData.noEffect[6] ?? ""}</Type>
            </TableRow>
        </tbody>
    )
};