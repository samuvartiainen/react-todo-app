import React, { useState } from "react";
import addicon from "./add-button.svg";
import "./App.css";
import TextField from "@material-ui/core/TextField";

function NewItem({ newTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    newTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <TextField
          type="text"
          fullWidth
          height="125vh"
          className="input"
          placeholder="Lisää uusi tehtävä"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          inputProps={{
            style: { fontSize: 25 },
          }}
        />
        <img
          className="addBtn"
          height="70vh"
          src={addicon}
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
}

export default NewItem;
