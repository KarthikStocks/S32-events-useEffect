import React, { useEffect, useRef } from "react";

function TenthMarksSheet() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let engInputRef = useRef();
  let telInputRef = useRef();
  let hindiInputRef = useRef();
  let HTMLInputRef = useRef();
  let CSSInputRef = useRef();
  let reactInputRef = useRef();
  let resultParaRef = useRef();
  let cityName = "Bangalore";
  let engResultRef = useRef();
  let telResultRef = useRef();
  let hindiResultRef = useRef();
  let HTMLResultRef = useRef();
  let CSSResultRef = useRef();
  let reactResultRef = useRef();
  //   console.log(firstName);  can't access

  useEffect(() => {
    console.log("Marks Sheet Component Loaded");
    alert("Welcome to my application");
  }, []);

  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input
            type="text"
            ref={firstNameInputRef}
            onFocus={() => {
              firstNameInputRef.current.style.backgroundColor = "lightgreen";
            }}
            onChange={() => {}}
            onBlur={() => {
              firstNameInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <label className="result"></label>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            ref={lastNameInputRef}
            onFocus={() => {
              lastNameInputRef.current.style.backgroundColor = "lightgreen";
            }}
            onChange={() => {}}
            onBlur={() => {
              lastNameInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <label className="result"></label>
        </div>
        <div>
          <label>English</label>
          <input
            type="number"
            ref={engInputRef}
            onFocus={() => {
              engInputRef.current.style.backgroundColor = "aqua";
            }}
            onChange={() => {
              let marks = engInputRef.current.value;
              engResultRef.current.innerHTML =
                engInputRef.current.value >= 35 ? "Pass" : "Fail";

              engInputRef.current.style.backgroundColor =
                marks >= 35 ? "lightgreen" : "red";
              engResultRef.current.style.backgroundColor =
                marks >= 35 ? "lightgreen" : "red";
            }}
            onBlur={() => {
              engInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <label className="result" ref={engResultRef}></label>
        </div>
        <div>
          <label>Telugu</label>
          <input
            type="number"
            ref={telInputRef}
            onFocus={() => {
              console.log("tel on focus");
              telInputRef.current.style.backgroundColor = "lightgrey";
            }}
            onChange={() => {
              console.log("tel on change");
              let marks = telInputRef.current.value;
              telResultRef.current.innerHTML = marks >= 35 ? "😁" : "😞";
            }}
            onBlur={() => {
              console.log("tel on blur");
              telInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <label className="result" ref={telResultRef}></label>
        </div>
        <div>
          <label>Hindi</label>
          <input
            type="number"
            ref={hindiInputRef}
            onFocus={() => {
              console.log("Hindi on focus");
              hindiInputRef.current.style.backgroundColor = "lightgreen";
            }}
            onChange={() => {
              console.log("Hindi on change");
              let marks = hindiInputRef.current.value;
              hindiResultRef.current.innerHTML = marks >= 35 ? "Pass" : "Fail";
            }}
            onBlur={() => {
              console.log("Hindi on blur");
              hindiInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <label className="result" ref={hindiResultRef}>
            Result
          </label>
        </div>
        <div>
          <label>HTML</label>
          <input
            type="number"
            ref={HTMLInputRef}
            onFocus={() => {
              HTMLInputRef.current.style.backgroundColor = "aqua";
            }}
            onChange={() => {
              //   let marks = HTMLInputRef.current.value;
              HTMLResultRef.current.innerHTML =
                HTMLInputRef.current.value >= 35 ? "Pass" : "Fail";
            }}
            onBlur={() => {
              HTMLInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <label className="result" ref={HTMLResultRef}></label>
        </div>
        <div>
          <label>CSS</label>
          <input
            type="number"
            ref={CSSInputRef}
            onFocus={() => {
              CSSInputRef.current.style.backgroundColor = "aqua";
            }}
            onChange={() => {
              let marks = CSSInputRef.current.value;
              CSSResultRef.current.innerHTML = marks >= 35 ? "Pass" : "Fail";
            }}
            onBlur={() => {
              CSSInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <label className="result" ref={CSSResultRef}></label>
        </div>
        <div>
          <label>React</label>
          <input
            type="number"
            ref={reactInputRef}
            onFocus={() => {
              reactInputRef.current.style.backgroundColor = "aqua";
            }}
            onChange={() => {
              //   let marks = engInputRef.current.value;
              reactResultRef.current.innerHTML =
                reactInputRef.current.value >= 35 ? "Pass" : "Fail";
            }}
            onBlur={() => {
              reactInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <label className="result" ref={reactResultRef}></label>
        </div>
        <div>
          <button
            type="button"
            // onMouseMove
            onClick={() => {
              console.log(cityName);
              let firstName = firstNameInputRef.current.value;
              let lastName = lastNameInputRef.current.value;
              let engMarks = Number(engInputRef.current.value);
              let telMarks = Number(telInputRef.current.value);
              let hindiMarks = Number(hindiInputRef.current.value);
              let HTMLMarks = Number(HTMLInputRef.current.value);
              let CSSMarks = Number(CSSInputRef.current.value);
              let reactMarks = Number(reactInputRef.current.value);
              let totalMarks =
                engMarks +
                telMarks +
                hindiMarks +
                HTMLMarks +
                CSSMarks +
                reactMarks;

              //   engResultRef.current.innerHTML = engMarks >= 35 ? "Pass" : "Fail";
              //   telResultRef.current.innerHTML = telMarks >= 35 ? "Pass" : "Fail";
              //   hindiResultRef.current.innerHTML =
              //     hindiMarks >= 35 ? "Pass" : "Fail";
              //   HTMLResultRef.current.innerHTML =
              //     HTMLMarks >= 35 ? "Pass" : "Fail";
              //   CSSResultRef.current.innerHTML = CSSMarks >= 35 ? "Pass" : "Fail";
              //   reactResultRef.current.innerHTML =
              //     reactMarks >= 35 ? "Pass" : "Fail";

              console.log(engMarks >= 35 ? "Pass" : "Fail");
              console.log(telMarks >= 35 ? "Pass" : "Fail");
              console.log(hindiMarks >= 35 ? "Pass" : "Fail");
              console.log(HTMLMarks >= 35 ? "Pass" : "Fail");
              console.log(CSSMarks >= 35 ? "Pass" : "Fail");
              console.log(reactMarks >= 35 ? "Pass" : "Fail");

              //   engInputRef.current.value = 9999000099988777;
              //   engInputRef.current.style.backgroundColor = "yellow";
              //   alert(engInputRef.current.value);
              //   alert(`Total Marks: ${totalMarks}`);

              resultParaRef.current.innerHTML = `${firstName} ${lastName}'s Total Marks: ${totalMarks}`;
              console.log(totalMarks);
            }}
          >
            Calculate Result
          </button>
        </div>
        <p ref={resultParaRef}>Please Enter Marks and Click Calculate</p>
      </form>
    </div>
  );
}

export default TenthMarksSheet;
