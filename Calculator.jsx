import './Calculator.css'
import { useState } from 'react'

const Calculator = () => { 
    const[input,setInput] = useState("");

    const handleClick = (value) => {
        if(value === "AC"){
            setInput("");
        }
        else if(value === "DEL"){
            setInput(input.slice(0,-1));
        }
        else if(value === "="){
            try{
                setInput(eval(input).toString());
            }
            catch{
                setInput("Error")
            }
        }
        else{
            setInput(input + value);
        }
    };


    return(
        <div className='container'>
               
            <div className='display'>{input || "0"}</div>
            <button className='btn1' onClick={ () => handleClick("AC")}>AC</button>
            <button onClick={ () => handleClick("DEL")}>DEL</button>
            <button onClick={ () => handleClick("+")}>+</button>
            <button onClick={ () => handleClick("1")}>1</button>
            <button onClick={ () => handleClick("2")}>2</button>
            <button onClick={ () => handleClick("3")}>3</button>
            <button onClick={ () => handleClick("*")}>*</button>
            <button onClick={ () => handleClick("4")}>4</button>
            <button onClick={ () => handleClick("5")}>5</button>
            <button onClick={ () => handleClick("6")}>6</button>
            <button onClick={ () => handleClick("-")}>-</button>
            <button onClick={ () => handleClick("7")}>7</button>
            <button onClick={ () => handleClick("8")}>8</button>
            <button onClick={ () => handleClick("9")}>9</button>
            <button onClick={ () => handleClick("/")}>/</button>
            <button style={{fontSize:35}} onClick={ () => handleClick(".")}>.</button>
            <button onClick={ () => handleClick("0")}>0</button>
            <button onClick={ () => handleClick("=")}>=</button>
        
        </div>
    )

};

export default Calculator;