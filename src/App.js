import React, { useState } from "react";
import allColors from "./styles/colors";
import { createGlobalStyle } from "styled-components";
import FormTask from "./components/FormTask";
import Task from "./components/Task";
import { generate as id } from "shortid";

const GlobalStyle = createGlobalStyle`

body{
    font-family: sans-serif;
    background-color: #222;
    color:${allColors.mainColor};
    text-align: center;
    margin: 0
}
`;

const App = () => {
  const [colorSelected, setColorSelected] = useState(allColors.colors[0]);
  const [tasks, setTask] = useState([]);

  const handleCompleteTask = (id) => {
    const currentTasks = [...tasks];
    const task = currentTasks.find((task) => task.id === id);
    const index = currentTasks.indexOf(task);
    currentTasks[index].done = !currentTasks[index].done;
    setTask(currentTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value.trim() !== "") {
      createNewTask(e.target.title.value);
      e.target.title.value = "";
    }
  };

  const handledeleteTask = (id) => {
    let currentTasks = tasks;
    currentTasks = currentTasks.filter((task) => task.id !== id);
    setTask(currentTasks);
  };

  const createNewTask = (title) => {
    const newTask = {
      id: id(),
      title,
      color: colorSelected,
      done: false,
    };

    const allTasks = [...tasks, newTask];
    setTask(allTasks);
  };

  const handleChangeColor = (color) => {
    setColorSelected(color);
  };

  return (
    <>
      <GlobalStyle />
      <h1>To Do List con Hooks</h1>
      <FormTask
        handleChangeColor={handleChangeColor}
        handleSubmit={handleSubmit}
        colorSelected={colorSelected}
      />
      {tasks.length === 0 && <p>No Task yet</p>}

      {tasks.map((task) => (
        <Task
          key={id()}
          done={task.done}
          title={task.title}
          color={task.color}
          handleCompleteTask={() => handleCompleteTask(task.id)}
          handledeleteTask={() => handledeleteTask(task.id)}
        />
      ))}
    </>
  );
};

export default App;
