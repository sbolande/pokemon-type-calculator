import React from 'react';
import styled from 'styled-components';
const types = require('./types.json');

const duplicates = (val, index, self) => self.indexOf(val) !== index;
const uniques = (val, index, self) => {
    if (!self.filter(duplicates).includes(val)) return true;
    else return false;
};

function getTypeData(one, two = null) {
    var typeData = {
        superEffective: [],
        doubleEffective: [],
        notEffective: [],
        doubleNotEffective: [],
        noEffect: []
    };

    if (one == null) return typeData;

    var oneSuper = types[one]?.superEffective;
    var twoSuper = types[two]?.superEffective;
    var oneNotEffective = types[one]?.notEffective;
    var twoNotEffective = types[two]?.notEffective;
    var oneNoEffect = types[one]?.noEffect;
    var twoNoEffect = types[two]?.noEffect;

    typeData = {
        superEffective: oneSuper.concat(twoSuper).filter(uniques),
        doubleEffective: oneSuper.concat(twoSuper).filter(duplicates),
        notEffective: oneNotEffective.concat(twoNotEffective).filter(uniques),
        doubleNotEffective: oneNotEffective.concat(twoNotEffective).filter(duplicates),
        noEffect: oneNoEffect?.concat(twoNoEffect).filter(uniques)
    }
    return typeData;
};

const TableRow = styled.tr`&:hover { background-color: #f5f5f5 }`;

export const Result = (props) =>{
    if (props.typeOne === null || props.typeOne === "") return null;
    var typeData = getTypeData(props.typeOne, props.typeTwo);
    return (
        <tbody>
            <TableRow>
                <td>{typeData.superEffective[0] ?? ""}</td>
                <td>{typeData.doubleEffective[0] ?? ""}</td>
                <td>{typeData.notEffective[0] ?? ""}</td>
                <td>{typeData.doubleNotEffective[0] ?? ""}</td>
                <td>{typeData.noEffect[0] ?? ""}</td>
            </TableRow>
            <TableRow>
                <td>{typeData.superEffective[1] ?? ""}</td>
                <td>{typeData.doubleEffective[1] ?? ""}</td>
                <td>{typeData.notEffective[1] ?? ""}</td>
                <td>{typeData.doubleNotEffective[1] ?? ""}</td>
                <td>{typeData.noEffect[1] ?? ""}</td>
            </TableRow>
            <TableRow>
                <td>{typeData.superEffective[2] ?? ""}</td>
                <td>{typeData.doubleEffective[2] ?? ""}</td>
                <td>{typeData.notEffective[2] ?? ""}</td>
                <td>{typeData.doubleNotEffective[2] ?? ""}</td>
                <td>{typeData.noEffect[2] ?? ""}</td>
            </TableRow>
            <TableRow>
                <td>{typeData.superEffective[3] ?? ""}</td>
                <td>{typeData.doubleEffective[3] ?? ""}</td>
                <td>{typeData.notEffective[3] ?? ""}</td>
                <td>{typeData.doubleNotEffective[3] ?? ""}</td>
                <td>{typeData.noEffect[3] ?? ""}</td>
            </TableRow>
            <TableRow>
                <td>{typeData.superEffective[4] ?? ""}</td>
                <td>{typeData.doubleEffective[4] ?? ""}</td>
                <td>{typeData.notEffective[4] ?? ""}</td>
                <td>{typeData.doubleNotEffective[4] ?? ""}</td>
                <td>{typeData.noEffect[4] ?? ""}</td>
            </TableRow>
            <TableRow>
                <td>{typeData.superEffective[5] ?? ""}</td>
                <td>{typeData.doubleEffective[5] ?? ""}</td>
                <td>{typeData.notEffective[5] ?? ""}</td>
                <td>{typeData.doubleNotEffective[5] ?? ""}</td>
                <td>{typeData.noEffect[5] ?? ""}</td>
            </TableRow>
            <TableRow>
                <td>{typeData.superEffective[6] ?? ""}</td>
                <td>{typeData.doubleEffective[6] ?? ""}</td>
                <td>{typeData.notEffective[6] ?? ""}</td>
                <td>{typeData.doubleNotEffective[6] ?? ""}</td>
                <td>{typeData.noEffect[6] ?? ""}</td>
            </TableRow>
        </tbody>
    )
};