import './App.css';
import React, { useState} from 'react';
import { func } from 'prop-types';

function App() {
  const [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      comments: '',
      isFriendly: true,
      employment: '',
      favColor: '',
    }
  )


  function handleChange(e) {
    const {name, value, type, checked} = e.target
    
    setFormData(prevFormData => {
      return {...prevFormData, [name]: type === 'checkbox' ? checked : value}})
  }

  function handleSubmit(e) {
    e.preventDefault()

    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder='First Name'
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input 
        type="text"
        placeholder='Last Name'
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input 
        type="email"
        placeholder='Email'
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      
      {/* textarea */}
      
      <textarea 
        name="comments"
        onChange={handleChange}
        placeholder='Comments'
        value={formData.comments}
      />
      
      {/* Checkbox */}
      
      <input 
        type="checkbox"
        onChange={handleChange}
        name="isFriendly"
        checked={formData.isFriendly}
        id="isFriendly"
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
     
      <br />
      <br />
      
      {/* Radio */}

      <fieldset>
        
        <legend>Current employment status</legend>
        
        <input 
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            onChange={handleChange}
            checked={formData.employment === "unemployed" }
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        
        <input 
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            onChange={handleChange}
            checked={formData.employment === "part-time" }
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        
        <input 
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            onChange={handleChange}
            checked={formData.employment === "full-time" }
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
                
      </fieldset>
      <br/>

      {/* Select and Option */}
      
      <label htmlFor="favColor">What is your favorite color?</label>
      <br />

      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >     
          <option value="">-- Choose --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>

      </select>
      
      <br />
      <br />

      <button>Submit</button>
    </form>
  );
}

export default App;
