/** @format */

// Contact.jsx
import React, { useState } from "react";
import undici from "undici";

const Contact = () => {
  const [formType, setFormType] = useState(null);

  const handleButtonClick = (type) => {
    setFormType(type);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform form submission logic with undici
    try {
      const response = await undici.request(
        "https://example.com/api/submitForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: formType,
            concern: event.target.concern.value,
            discordUser: event.target.discordUser.value,
            // Add other form fields as needed
          }),
        }
      );

      if (response.statusCode === 200) {
        // Form submitted successfully
        console.log("Form submitted successfully");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    // Reset the form type
    setFormType(null);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <div>
        <button onClick={() => handleButtonClick("General")}>
          General Question/Concern
        </button>
        {/* Add other buttons */}
      </div>
      {formType && (
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <label>
            What is your Concern?
            <input type='text' name='concern' required />
          </label>
          <label>
            Your Discord user or ID (optional)
            <input type='text' name='discordUser' />
          </label>
          <label>
            Drag and drop images here (optional)
            <input type='file' name='images' />
          </label>
          <button type='submit'>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
