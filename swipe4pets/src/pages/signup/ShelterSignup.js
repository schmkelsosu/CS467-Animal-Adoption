import React, {useEffect, useState} from 'react';
import { useNavigate, Link} from 'react-router-dom';
import ShelterStep1 from '../../Components/Signup/Shelter/shelterStep1';
import ShelterStep2 from '../../Components/Signup/Shelter/shelterStep2';
import CompleteSignup from '../../Components/completeSignup';
import ProgressBar from "../../Components/progressBar";
import ProgressBar2 from "../../Components/progressBar2";
import NavBar from "../../Components/NavBar.jsx";

// CITATION
// ACCESSED: November 2023
// LINK: https://www.w3schools.com/howto/howto_js_form_steps.asp
// USED: this helped me figure out the implementation of a multi-step form

export default function ShelterSignup() {
  const navigate = useNavigate();

  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const addOrganizationAccount = async () => {
    const newAdopter = {
      organizationName,
      email,
      //password,
      phoneNumber,
      //addressLine1,
      //addressLine2,
      //city,
      //state,
      //zip,
    };
    const response = await fetch("/api/organizationUser", {
      method: "POST",
      body: JSON.stringify(newAdopter),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json()
    if (result.account_created === "success") {
      alert(
        "Thank you for signing up!"
      );
    }
  };

// initiate step
  const [currentStep, setStep] = useState(0)

// uses current step to return react component associated with that part of the form
  const showStep = () => {
    let signup_buttons = document.getElementsByClassName("signup-buttons");
    let nextBtn = document.getElementById("nextButton");
    // first step
    if (currentStep === 0) {
      nextBtn.innerHTML = "Next";
      //document.getElementById("nextButton").innerHTML = "Next";
      return <ShelterStep1 organizationName={organizationName} email={email} password={password} setOrganizationName={setOrganizationName} setEmail={setEmail} setPassword={setPassword} />;
    // second step
    } else if (currentStep === 1) { 
      //document.getElementById("nextButton").innerHTML = "Submit";
      nextBtn.innerHTML = "Submit";
      return  <ShelterStep2 phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} addressLine1={addressLine1} setAddressLine1={setAddressLine1} addressLine2={addressLine2} setAddressLine2={setAddressLine2} city={city} setCity={setCity} state={state} setState={setState} zip={zip} setZip={setZip} />;
    // finished page
    } else if (currentStep === 2) {
      signup_buttons[0].style.display = 'none';
      return  <CompleteSignup accountType={0} />;
    }
  };

  // event handler for hitting back button
  const prevStep = () => {
    if (currentStep === 0) {
      navigate("/signup");
      return false;
    } else {
    setStep(currentStep - 1);
  }
}
  
  // event handler for hitting next button; checks if all fields are filled out 
  const nextStep = () => {
    if (currentStep === 1) {
      if (checkStep(1)) {
        addOrganizationAccount()
          //.catch(error => {
          //  alert('Failed to create account, please try again')
          //  navigate("/signup");
          //}
          //)
        setStep(currentStep + 1);
      } else {
        alert("Missing fields");
        return false;
      }
    } else if (currentStep === 0){
      if (checkStep(0)) {
        setStep(currentStep + 1);
      } else {
        alert("Missing fields");
        return false;
      }
    }
  };

  // function checks to make sure the current step was completed (all fields filled out )
  const checkStep = (step) => {
    if (step === 0) {
      if (organizationName === "" || email === "" || password === "") {
        return false;
      } else {
        return true;
      }
    }
    if (step === 1) {
      if (
        phoneNumber === "" ||
        addressLine1 === "" ||
        addressLine2 === "" ||
        city === "" ||
        state === "" ||
        zip === ""
      ) {
        return false;
      } else {
        return true;
      }
    }
  };


  return (
    <div class="center">

      {showStep()}

      <div class='signup-buttons'>
      <button type='button' id='backButton' class="kelly-button" onClick={() => prevStep()}>Back</button>
      &nbsp; &nbsp;
      <button type='button' id='nextButton' class="kelly-button" onClick={() => nextStep()}> Next </button>
      </div>

    </div>
  );
}
