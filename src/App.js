import React, { useState } from 'react';
import ToDoEntry from './ToDoEntry'
import ToDoDisplay from './ToDoDisplay';
import styled from "styled-components"

const StyledToDoEntry = styled(ToDoEntry)`
  position: absolute;
  width: 100rem;
  height: 79.4rem;
  left: 0rem;
  top: 0rem;


  background: #420039;
`

const StyledToDoDisplay = styled(ToDoDisplay)`
  position: absolute;
  width: 58.8rem;
  height: 79.4rem;
  left: 100rem;
  top: 0rem;

  background: #FEEFDD;
`

const Div = styled.div`
  position: absolute;
  top: -1rem;
  left: -1rem;
`

function App(props) {
  const [todo, setTodo] = useState([])

  return (
    <Div>
      <StyledToDoEntry functionSetToDo={setTodo}/>
      <StyledToDoDisplay dataToDo={todo}/>
    </Div>  
  );
}

export default App;