/** @format */

import React from "react";
import "../styles/Form.css";

function Form() {

  return (
    <div className='form-container'>
      <form className='form'>
        <div className='form-group'>
          <label htmlFor='user'>Discord Username </label>
          <input type='text' id='user' name='user' required='' />
        </div>
        <div className='form-group'>
          <label htmlFor='userId'>Discord User ID </label>
          <input type='number' id='userId' name='userId' required='' />
        </div>
        <div className='form-group'>
          <label htmlFor='textarea'>How Can We Help You?</label>
          <textarea
            name='textarea'
            id='textarea'
            rows='10'
            cols='50'
            required=''></textarea>
        </div>
        <button className='form-submit-btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
