import React from "react";

export default function Form({ username, setUsername }) {
  const handleInput = (e) => {
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