import React from 'react';
import {useNavigate} from 'react-router-dom';

const ShelterSignup = () => {
  const navigate = useNavigate();

  return (

    <>
    <head>
          <h1>Shelter Signup</h1>
      </head>
     <body> <center>
        <h1>Shelter Signup</h1>
      <form>
              <div class="shelter-signup">
              <label>Phone Number</label> <br></br>
                <input type='text' id='phone-number' name='phone-number' required></input>
                <br></br> <br></br>

                <label>Street Address</label> <br></br>
                <input type='text' id='street-address' name='street-address' required></input>
                <br></br> <br></br>

                <label>City</label> <br></br>
                <input type='text' id='city' name='city' required></input>
                <br></br> <br></br>

                <label>State</label> <br></br>
                <input type='text' id='state' name='state' required></input>
                <br></br> <br></br>

                <label>ZIP code</label> <br></br>
                <input type='text' id='zip-code' name='zip-code' required></input>
                <br></br> <br></br>

                <button type='submit'> Submit</button>

              </div>
          </form>
          </center>
          </body> 
          </>


  );
};

export default ShelterSignup;