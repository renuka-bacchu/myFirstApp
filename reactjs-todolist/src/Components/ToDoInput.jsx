import React, { useState } from 'react'

export default function ToDoInput(props) {
  const { handleAddToDo, editText, setToDoValue } = props


  console.log("Edit text ", editText)
  return (
    <header>
      <input type="text" placeholder='Enter todo list...' value={editText}
        onChange={(e) => {
          setToDoValue(e.target.value)
        }} />
      <button disabled={editText == "" ? true : false} onClick={() => {
        handleAddToDo(editText)
        setToDoValue("")
      }}>{editText == "" ? "ADD" : "SAVE"}</button>
    </header>
  )
}

