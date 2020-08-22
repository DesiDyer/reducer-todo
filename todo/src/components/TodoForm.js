import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";

function TodoForm(props) {
  const [item, setItem] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = (e) => {
    setItem(e.target.value);
  };

  const submitItem = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: item });
    setItem("");
  };

  return (
    <form onSubmit={submitItem}>
      <input
        className="ui transparent input"
        type="text"
        name="item"
        value={item}
        onChange={handleChanges}
      />

      <button className="ui inverted red button">Add</button>
    </form>
  );
}

export default TodoForm;
