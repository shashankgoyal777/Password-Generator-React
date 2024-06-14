import React, { useEffect } from "react";
import { useState } from "react";
function PasswordGen() {
  const [password, setPassword] = useState("");

  const [limit, setLimit] = useState(10);

  const [number, setNumber] = useState(true);
  const [special, setSpecial] = useState(true);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  // Generate()

  function Generate() {
    console.log("Password Generated Successfully!!");

    let temp = "";
    let chars = "";

    if (number) chars += "1234567890";
    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (special) chars += "`~!@#$%^&*+=-_,./?|";

    // console.log(chars.charAt(3))

      for (let i = 0; i < limit; i++) {
        temp += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setPassword(temp);

      // const regex =
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`~!@#$%^&*+=-_,./?|]).+$/;

      // console.log(regex.test(password));
  
  }

  function copy() {
    // console.log("copyButton")
    navigator.clipboard.writeText(password);
    alert("Password Copied")
  }
  
  useEffect(() => {
    Generate();
  }, []);
  return (
    <>
     
        {/* <div className="heading">Password Generator</div> */}
        <div className="main">
          <img src="lock.png" alt="lock" />
          <h2>PASSWORD GENERATOR</h2>
          <p>
            Create strong and secure passwords to keep your account safe online
          </p>

          <div className="password">
            {/* <input type="text" id="show" readOnly value={password} /> */}
            <p className="show-password-para">{password}</p>
            <i
              onClick={(e) => {
                Generate();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width="35px"
                height="35px"
                viewBox="0 0 1024 1024"
                class="icon"
              >
                <path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 0 1 655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 0 1 279 755.2a342.16 342.16 0 0 1-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 0 1 109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" />
              </svg>
            </i>

            <button class="Btn" onClick={copy}>
              <span class="text">Copy</span>
              <span class="svgIcon">
                <svg
                  fill="white"
                  viewBox="0 0 384 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path>
                </svg>
              </span>
            </button>
            {/* <br></br> */}
          </div>

         
         <p id="psw-strength" className={limit < 8 ? "red" : limit < 16 ? "blue" : "green"}>
            {limit < 8 ? "Weak" : limit < 16 ? "Medium" : "Strong"}
          </p>

         
          <p className="length-para">Password Length: {limit}</p>

          <input
            type="range"
            value={limit}
            min={6}
            max={22}
            onChange={(e) => {setLimit(e.target.value);setPassword("")}}
          />
          <div className="checkboxes">
            <label htmlFor="first">Numbers</label>
            <input
              checked={number}
              id="first"
              type="checkbox"
              onChange={() => {
                setNumber(!number);
                setPassword("");
              }}
            ></input>
          </div>
          <div className="checkboxes">
            <label htmlFor="second">Upper Case</label>
            <input
              checked={upper}
              id="second"
              type="checkbox"
              onChange={() => {
                setUpper(!upper);
                setPassword("");
              }}
            ></input>
          </div>
          <div className="checkboxes">
            <label htmlFor="third">Lower Case</label>
            <input
              id="third"
              checked={lower}
              type="checkbox"
              onChange={() => {
                setLower(!lower);
                setPassword("");
              }}
            ></input>
          </div>
          <div className="checkboxes">
            <label htmlFor="fourth">Symbols</label>
            <input
              checked={special}
              id="fourth"
              type="checkbox"
              onChange={() => {
                setSpecial(!special);
                setPassword("");
              }}
            ></input>
          </div>
        </div>
      
      <p style={{marginLeft:"1200px"}}>~Shashank Goyal</p>
    </>
  );
}

export default PasswordGen;
