import React, { useReducer } from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";
import ClearBtn from "./components/clearBtn";
import { initialState, reducer } from "./reducers/reducer";

// const initialTodoItems = [];

function App() {
  // const [todoItems, setTodoItems] = useState(initialTodoItems);

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleItem = (itemId) => {
    console.log(itemId);

    dispatch({ type: "TOGGLE_ITEM", payload: itemId });

    // setTodoItems(
    //   state.map((item) => {
    //     if (itemId === item.id) {
    //       return {
    //         ...item,
    //         done: !item.done,
    //       };
    //     }
    //     return item;
    //   })
    // );
  };

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
    //   const newItem = {
    //     name: item,
    //     id: Date.now(),
    //     done: false,
    //   };
    //   setTodoItems([...todoItems, newItem]);
  };

  const cleardone = (e) => {
    e.preventDefault();

    // setTodoItems(state.filter((item) => !item.done));
    dispatch({ type: "CLEAR_DONE" });
  };

  return (
    <div className="App">
      <div>
        <TodoForm addItem={addItem} />
      </div>

      <div id="paper">
        <div id="title-container">
          <h1>Todo List</h1>
        </div>
        <div id="pattern">
          <div id="content">
            <div className="header"></div>

            <TodoList todoItems={state} toggleItem={toggleItem} />
          </div>
        </div>
      </div>
      <div className="btn-container">
        <ClearBtn cleardone={cleardone} />
      </div>
    </div>
  );
}

export default App;
