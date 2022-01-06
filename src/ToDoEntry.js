import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form'
import GoButton from "./GoButton"
import styled from "styled-components"

// Rename states 
let state = ["", "t", "m", "to", "tu", "mo", "tom", "tod", "tue", "mon"]
let FSMcurrentState = ""
let stateTransition = {
    [state[0]]: {
        "t": state[1],
        "m": state[2],
    },
    [state[1]]: {
        "o": state[3],
        "u": state[4],
    },
    [state[2]]: {
        "o": state[5],
    },
    [state[3]]: {
        "m": state[6],
        "d": state[7],
    },
    [state[4]]: {
        "e": state[8],
    },
    [state[5]]: {
        "n": state[9],
    },
}

// Count of running onChange 
let count = 0;


function FSM(input, currentState){
    // Use input and current state to get the next state from the state transition table
    // and set current state to new state
    // if new state is state 0 return false else return true
    
    let possibleOptions = stateTransition[currentState]
    let newState = possibleOptions == undefined || possibleOptions[input] == undefined ? state[0] : possibleOptions[input]
    // console.log(newState)
    FSMcurrentState = newState

    if(newState == state[0]){
        return false
    }
    else{
        return true
    }
}


const Input = styled.input`
    position: absolute;
    width: 62rem;
    height: 9rem;
    left: 16rem;
    top: 39rem;

    color: #420039;
    font-size: 3rem;
    text-indent: 3rem;
    background: #420039;
    outline: none;
    caret-color: #FEEFDD;

    border: 4px solid #FEEFDD;
    box-sizing: border-box;
    border-radius: 33.3333px;
`
const PositionedGoButton = styled(GoButton)`
    position: absolute;
    width: 8rem;
    height: 8rem;
    left: 80rem;
    top: 40rem;
`
const P1 = styled.p`
    position: absolute;
    top: 38.7rem;
    left: 19.7rem;
    
    color: #FEEFDD;
    font-size: 3rem;
`

function append(arr, item) {
    arr.push(item)
    return arr
}

function ToDoEntry({className, functionSetToDo}) {
    const {register, handleSubmit} = useForm();

    const [inputText, setInputText] = useState("");
    const paragraphEl = useRef(null)

    const submit = (data) => {
        console.log(data);
        // FSM take data and extract the day and todo
        // Create object with todo and the day
        // Internal FSM
        let regExp = /\b[tm][ou][dmne]/
        let point = data.todo.search(regExp)
        let firstPart = data.todo.slice(0, point-1)
        let secondPart = data.todo.slice(point,)
        secondPart = secondPart.charAt(0).toUpperCase() + secondPart.slice(1)
        let todo = {
            todo: firstPart,
            day: secondPart,
        }
        functionSetToDo(prevState => prevState.concat(todo))
        setInputText("");
        document.getElementById("main").innerHTML = ""
        document.getElementById("fsm").innerHTML = ""
    }

    const onChange = (e) => {
        let value = e.target.value
        setInputText(value)
        // Pass last element into FSM function to change State and return true
        // if true use the number of characters of the state to go back
        // then rebuild the innerHTML with a span.
        // this is done by breaking the value into the two parts and then creating two elements and appending
        let detected = FSM(value[value.length - 1], FSMcurrentState)
        // console.log(value[value.length - 1])
        // console.log(FSMcurrentState)
        // let detected = FSM("o", "t")
        // console.log(detected)

        let element1 = document.createElement("p")
        element1.innerHTML = value.slice(0, value.length - FSMcurrentState.length)
        element1.style.display = "inline"
        element1.id = "main"
        let element2 = document.createElement("span")
        element2.innerHTML = FSMcurrentState
        element2.style.display = "inline"
        element2.style.background = "#FEEFDD"
        element2.style.color = "#420039"
        element2.style.borderRadius = "1rem"
        element2.id = "fsm"
        if(count == 0){
            paragraphEl.current.appendChild(element1)
            paragraphEl.current.appendChild(element2)
            count++
        }
        else{
            let element1 = document.getElementById("main")
            let element2 = document.getElementById("fsm")
            element1.innerHTML = value.slice(0, value.length - FSMcurrentState.length)
            element2.innerHTML = FSMcurrentState
        }
    }

    // Input to display with the day highlighted
    return (
        <div className={className}>
            <form onSubmit={handleSubmit(submit)}>
                <Input type="text" autoComplete="off" spellcheck="false" value={inputText} {...register("todo")} onChange={onChange}/>
                <P1 ref={paragraphEl}></P1>
                <PositionedGoButton/>
            </form>
        </div>
    );
}

export default ToDoEntry;