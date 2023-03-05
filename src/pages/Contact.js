import React, { useState } from "react";


function Contact() {
    
    // Setting the component's initial state
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" });
  
    const handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = event.target;
  
      if (name === "firstName") {
        setFormData({firstName: value, lastName: formData.lastName, email: formData.email});
      } else if (name === "lastName") { // must be the lastName field
        setFormData({firstName: formData.firstName, lastName: value, email: formData.email});
      }
      else {
        setFormData({firstName: formData.firstName, lastName: formData.lastName, email: value});
      }
    };
  
    const handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
  
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Thank you for submitting your request ${formData.firstName} ${formData.lastName}`);
        setFormData({
          firstName: "",
          lastName: ""
        });
    };
  
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hey, want to link up? Fill in the form below and I'll be in touch soon.
        </p>
        <form className="form">
          <input
            value={formData.firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={formData.lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={formData.email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Email address"
          />
          <button onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
  

export default Contact;