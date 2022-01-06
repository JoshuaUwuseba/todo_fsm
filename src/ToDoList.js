import React from 'react';
import ToDo from './ToDo';
import ToDoData from './TestData';

function ToDoList({className, data}) {
    // The key change is to use element.todo instead of element. So todo is separate from day
    // data = ToDoData
    
    return (
        <div className={className}>
            {data.map((element, index) => <ToDo key={index} top={6 * index} todo={element.todo} day={element.day}/>)}
        </div>
    );
}

export default ToDoList;