/** @format */

import React from "react";
import "../styles/Form.css";

function Form() {

  return (
    <div className='form-container'>
      <form className='form'>
        <div className='form-group'>
          <label htmlFor='email'>Discord Username & Discord ID (Developer Mode needed)</label>
          <input type='text' id='email' name='email' required='' />
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
        <button  className='form-submit-btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
