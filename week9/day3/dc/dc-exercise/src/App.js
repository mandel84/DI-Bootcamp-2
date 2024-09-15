import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    nutsFree: false,
    lactoseFree: false,
    vegan: false,
  });

  // Handle changes in the form inputs
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect with form data (simulate a URL with query parameters)
    const queryString = new URLSearchParams(formData).toString();
    window.location.href = `/submit?${queryString}`;
  };

  return (
    <div>
      <h1>Sample form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <br />
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
        <br />
        <label>Select your destination</label>
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="paris">Paris</option>
          <option value="london">London</option>
          <option value="tokyo">Tokyo</option>
        </select>
        <br />
        <label>Dietary restrictions:</label>
        <label>
          <input
            type="checkbox"
            name="nutsFree"
            checked={formData.nutsFree}
            onChange={handleChange}
          />
          Nuts free
        </label>
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={formData.lactoseFree}
            onChange={handleChange}
          />
          Lactose free
        </label>
        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={formData.vegan}
            onChange={handleChange}
          />
          Vegan
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <h2>Entered information:</h2>
      <p>Your name: {formData.firstName} {formData.lastName}</p>
      <p>Your age: {formData.age}</p>
      <p>Your gender: {formData.gender}</p>
      <p>Your destination: {formData.destination}</p>
      <p>Your dietary restrictions:</p>
      <ul>
        <li>Nuts free: {formData.nutsFree ? "Yes" : "No"}</li>
        <li>Lactose free: {formData.lactoseFree ? "Yes" : "No"}</li>
        <li>Vegan: {formData.vegan ? "Yes" : "No"}</li>
      </ul>
    </div>
  );
}

export default App;
