import './App.css'
import ToDoInput from './Components/ToDoInput'
import ToDoList from './Components/ToDoList'
import React, { PureComponent, useState } from 'react'


function App() {

  const [myToDoList, setToDos] = useState([])
  const [editListText, setToDoValue] = useState("")


  function handleAddToDo(newToDo) {
    const newToDoList = [...myToDoList, newToDo]
    setToDos(newToDoList)
  }

  function handleDeleteList(index) {
    const newToDoList = myToDoList.filter((todos, todoIndex) => todoIndex != index)
    setToDos(newToDoList)
  }

  function handleEditList(index) {
    const editListTextLoc = myToDoList[index]
    setToDoValue(editListTextLoc)
    handleDeleteList(index)
  }


  return (
    <>
      <ToDoInput handleAddToDo={handleAddToDo} editText ={editListText} setToDoValue={setToDoValue}/>
      <ToDoList toDoList={myToDoList} handleDeleteList={handleDeleteList} handleEditList={handleEditList} />
    </>
  )
}

export default App
