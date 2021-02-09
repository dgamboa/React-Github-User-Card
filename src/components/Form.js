import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function Form({ username, setUsername }) {
  const handleInput = (e) => {
    console.log(e.target[0].value)
    e.preventDefault();
    setUsername(e.target[0].value);
  }

  return (
    <form className="input-username" onSubmit={handleInput}>
      <input 
        type="text"
        value={username}
        placeholder="Enter username"
      />
    </form>
  )
}