import React from "react";

function InputArea(props) {
  function addItem() {
    props.add();
  }
  function handleChange(event) {
    props.handle(event.target.value);
  }
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={props.inputText} />
      <button onClick={addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
