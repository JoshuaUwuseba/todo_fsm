import React from 'react';
import styled from "styled-components"

const Div1 = styled.div`
    position: absolute;
    display: flex;
    width: 40rem;
    flex-direction: row;
    padding: 2.3rem;
    border-bottom: 2px solid #420039;
`
const Div2 = styled.div`
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    left: 0rem;
    top: 0rem;

    border: 2px solid #420039;
    box-sizing: border-box;
    border-radius: 6.66667px;
`
const P1 = styled.p`
    position: absolute;
    width: 237.33px;
    height: 29.33px;
    left: 7rem;
    top: -2.5rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;

    color: #420039;
`
const P2 = styled.p`
    position: absolute;
    width: 42.67px;
    height: 29.33px;
    left: 38rem;
    top: -1rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FF4000;

`

function ToDo({todo, day, top}) {
    return (
        <Div1 style={{top: `${String(top)}rem`}}>
            <Div2></Div2>
            <P1>{todo}</P1>
            <P2>{day}</P2>
        </Div1>
    );
}

export default ToDo;