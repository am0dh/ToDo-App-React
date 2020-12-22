import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const [todosState, setTodosState] = useState({
    todos: [],
  });

  const [searchState, setSearchState] = useState("");

  const addTaskHander = () => {
    let newTask = prompt("Add Task", "Add Task");
    if (typeof newTask === "string") {
      newTask = newTask.trim();
    }
    if (newTask === null || newTask === "Add Task" || newTask === "") {
      return;
    } else {
      let taskObj = { task: newTask, done: false };
      setTodosState({ todos: [...todosState.todos, taskObj] });
    }
  };

  const deleteHandler = (id) => {
    let arr = [...todosState.todos];
    let bool = window.confirm("Are you that you want to delete this Task?");
    if (bool === true) {
      arr = arr.filter((item, index) => {
        if (index !== id) {
          return item;
        } else {
          return;
        }
        return;
      });

      setTodosState({ todos: [...arr] });
    }
  };

  const editHandler = (id) => {
    let arr = [...todosState.todos];
    let str = arr[id].task;
    let edited = prompt("Edit the thing", str);
    if (edited === null || edited === undefined || edited === "") {
      return;
    } else {
      arr[id].task = edited;
      setTodosState({ todos: [...arr] });
    }
  };

  const completedHandler = (id) => {
    let arr = [...todosState.todos];
    arr[id].done = !arr[id].done;
    setTodosState({ todos: [...arr] });
  };

  const filterTask = (str) => {
    let arr = [...todosState.todos];

    let doneTrue = arr.filter((item) => {
      if (item.done === true) {
        return item;
      } else {
        return;
      }
    });
    let doneFalse = arr.filter((item) => {
      if (item.done === false) {
        return item;
      } else {
        return;
      }
    });
    console.log(arr);
    if (str === "incomplete") {
      setTodosState({ todos: [...doneFalse, ...doneTrue] });
    } else if (str === "completed") {
      setTodosState({ todos: [...doneTrue, ...doneFalse] });
    }
  };

  let totalTasks = todosState.todos.length;

  return (
    <div className="app-class">
      <h1>To-Do</h1>
      <div className="dropdown">
        <span>Select Filtering</span>
        <div class="dropdown-content">
          <button onClick={() => filterTask("completed")}>
            {" "}
            Completed first
          </button>
          <button onClick={() => filterTask("incomplete")}>
            {" "}
            Incomplete first
          </button>
        </div>
      </div>
      <button onClick={() => addTaskHander()}>Add</button>
      <div className="task-num">
        {" "}
        Total Tasks: {totalTasks} <br />
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => setSearchState(e.target.value)}
        />{" "}
      </div>

      {todosState.todos.map((item, index) => {
        if (searchState !== null || searchState !== "") {
          if (item.task.includes(searchState)) {
            return (
              <Card
                key={index}
                data={item.task}
                done={item.done}
                index={index}
                delete={deleteHandler}
                edit={editHandler}
                completed={completedHandler}
              />
            );
          }
        } else {
          return (
            <Card
              key={index}
              data={item.task}
              done={item.done}
              index={index}
              delete={deleteHandler}
              edit={editHandler}
              completed={completedHandler}
            />
          );
        }
      })}
    </div>
  );
};

export default App;
