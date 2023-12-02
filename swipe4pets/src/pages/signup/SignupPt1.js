import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "../../Components/progressBar";
import NavBar from "../../Components/NavBar.jsx";

export default function SignupPt1() {
  const navigate = useNavigate();

  let accountType = 0;

  // Function sets account type as either Shelter (1) or Adopter (2)
  const setAccountType = (n) => {
    accountType = n;
  };

  // Function navigates to either shelter or adoption page, based on button selection
  const nextPage = () => {
    if (accountType == 1) {
      navigate("/sheltersignup");
    } else if (accountType == 2) {
      navigate("/adoptersignup");
    } else {
      alert("ERROR: Select account type");
    }
  };

  return (
    <div class='center'>
      <NavBar />
      <h1>Sign Up</h1>
      <form>
        <div class='signup'>
          <h1>
            <ProgressBar step={0} />
          </h1>
          <label>Select One</label>
          <br></br>
          <button
            type='button'
            id='shelterType'
            onClick={() => setAccountType(1)}
          >
            Shelter
          </button>
          <br></br> <br></br>
          <button
            type='button'
            id='adopterType'
            onClick={() => setAccountType(2)}
          >
            Adopter
          </button>
          <br></br>
          <br></br>
          <Link to='/'>
            <button class="kelly-button">Back</button>
          </Link>
          &nbsp; &nbsp;
          <button type='button' id='nextButton' class="kelly-button" onClick={() => nextPage()}>
            {" "}
            Next{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
