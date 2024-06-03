import React from "react";
import { useState } from "react";
function PasswordGen() {
  const [password, setPassword] = useState("");

  const [limit, setLimit] = useState(8);

  const [number, setNumber] = useState(false);
  const [special, setSpecial] = useState(false);
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);

  function Generate() {
    console.log("Generator Function");

    let temp = "";
    let chars = "";

    if (number) chars += "1234567890";
    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (special) chars += "`~!@#$%^&*+=-_,./?|";

    // console.log(chars.charAt(3))
    if(limit>=8 && limit<=20)
      {

      
    for(let i=0;i<limit;i++)
        {
            temp+=chars.charAt(Math.floor(Math.random() * chars.length))
        }
        setPassword(temp)
      }
      else{
        alert("Password Length should be [8-20] characters")
      }
    // random = Math.floor(Math.random() * 26);
  }

  return (
    <>
    <div className="container">

    
    <div className="heading">Password Generator</div>
    <div className="main">

   
      {/* Will show the Generated Passsword */}

      <div className="buttons">
      <input type="text" id="show" readOnly value={password} />
      {/* <br /> */}
      
      
      <label>Password Length: </label>
      <input
        type="number"
        id="show"
        onChange={(e) =>{ 
                    setLimit(e.target.value);
        }}
        value={limit}
      ></input>
      <button onClick={() => Generate()}>Generate</button>
      </div>

    
      <div className="option">
      <label htmlFor="first" >Numbers</label>
      <input 
      id="first"
        type="checkbox" 
        onChange={() => {
          setNumber(!number);
        }}
      ></input>
      &nbsp; &nbsp;
      <label htmlFor="second">Upper Case</label>
      <input
      id="second"
        type="checkbox" 
        onChange={() => {
          setUpper(!upper);
        }}
      ></input>
      &nbsp; &nbsp;
      <label htmlFor="third">Lower Case</label>
      <input
      id="third"
        type="checkbox" 
        
        onChange={() => {
          setLower(!lower);
        }}
      ></input>
      &nbsp; &nbsp;
      <label htmlFor="fourth">Symbols</label>
      <input
      id="fourth"
        type="checkbox" 
        onChange={() => {
          setSpecial(!special);
        }}
      ></input>
      </div>
       </div>
       </div>
    </>
  );
}

export default PasswordGen;
