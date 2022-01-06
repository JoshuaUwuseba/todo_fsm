import React from 'react';
import ToDoList from "./ToDoList"
import styled from "styled-components"

const PositionedToDoList = styled(ToDoList)`
    position: absolute;
    left: 7.5rem;
    top: 12.5rem;
`

function ToDoDisplay({className, dataToDo}) {
    return (
        <div className={className}>
            <PositionedToDoList data={dataToDo}/>
        </div>
    );
}

export default ToDoDisplay;