import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar.jsx";

const CreateProfile = () => {
  return (
    <div>
      <NavBar />
      <form>
        <div class='col-md-4 mb-3 offset-md-4'>
          <div class='form-row'>
            <div class='form-group'>
              <label for='name'>Name</label>
              <input
                type='name'
                class='form-control mb-2'
                id='name'
                placeholder='Enter name'
              ></input>
            </div>
          </div>

          <div class='form-group' id='formgroup2'>
            <label for='availability' class='mb-2'>
              Availability
            </label>
            <select class='custom-select mb-2' id='availability'>
              <option selected>Select availability</option>
              <option>Available</option>
              <option>Adoption Pending</option>
              <option>Adopted</option>
              <option>Not available</option>
            </select>
          </div>

          <form class='form-inline'>
            <label class='sr-only' for='species'>
              Species
            </label>
            <select class='custom-select mb-2' id='species'>
              <option selected>Select species</option>
              <option>Dog</option>
              <option>Cat</option>
              <option>Other</option>
            </select>
          </form>

          <div class='form-group'>
            <label for='petName'>Breed</label>
            <input
              type='text'
              class='form-control mb-2'
              id='breed'
              placeholder='Enter breed'
            ></input>
          </div>

          <div class='form-group'>
            <label for='age'>Age</label>
            <input
              type='text'
              class='form-control mb-2'
              id='age'
              placeholder='Enter age'
            ></input>
          </div>

          <div class='form-group'>
            <label for='dispositions' class='mb-2'>
              Dispositions
            </label>
          </div>

          <div class='form-check-inline'>
            <input type='checkbox' class='form-check-input' id='check0'></input>
            <label class='form-check-label' for='check0'>
              Good with other animals
            </label>
          </div>
          <div class='form-check-inline'>
            <input
              type='checkbox'
              class='form-check-input mb-2'
              id='check1'
            ></input>
            <label class='form-check-label' for='check1'>
              Good with children
            </label>
          </div>

          <form>
            <div class='form-group'>
              <label for='petPic'>Animal picture</label>
              <input
                type='file'
                class='form-control-file mb-2'
                id='petPic'
              ></input>
            </div>
          </form>

          <div class='form-group'>
            <label for='description'>Description</label>
            <textarea
              class='form-control mb-2'
              id='description'
              rows='3'
            ></textarea>
          </div>
          <Link to='/shelterHome'>
            <button type='submit'>Submit</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateProfile;
