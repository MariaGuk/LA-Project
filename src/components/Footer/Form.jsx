import React, { useState } from 'react'

import arrowRight from '../../icons/arrow-right.svg';

import { Arrow, Button, StyledForm, StyledInputField, } from './styled';

const Form = ({ handleOpen}) => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch('https://jsonplaceholder.typicode.com/todos/1', formData)
      .then((response) => response.json())
      .then(json => {
        handleOpen();
        setEmail('')
        event.target.reset();
      })
      .catch((error) => {
        handleOpen();
        console.log(error, 'error');
      })
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputField
        type='email'
        name='email'
        placeholder='Enter your Email and get notified'
        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z ]{2,4}$'
        onChange={handleChange}
      />
      <Button type='submit' > <Arrow src={arrowRight} /> </Button>
    </StyledForm>
  )
};

export default Form;