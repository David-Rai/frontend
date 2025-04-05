import React, { useRef } from "react";
import { useState, useEffect, useReducer } from "react";
import { useStore } from "../../customHooks/useStore";

const Actions = {
  add: "addtodo",
  delete: "deletetodo",
  regain:"restroing the data"
};

// Reducer function
const reducer = (state, action) => {
  // alert(action.payload)
  switch (action.type) {
    case Actions.regain:
        return action.payload;
    case Actions.add:
      return { todos: [...state.todos, action.payload] };
    case Actions.delete:
      return { todos: state.todos.filter((t, i) => i !== action.payload) };
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, { todos: ["apple", "banana"] });
  const inputRef = useRef(null);

//stores.retrives data on every todo list added
useEffect(()=>{
inputRef.current.focus();

const previousData = useStore.getData()
 console.log(previousData)
 dispatch({type:Actions.regain,payload:previousData})  
},[])

useEffect(()=>{
inputRef.current.value=" "
useStore.storeData(state) 
},[state])


  //add todo dispatch
  const addTodo = () => {
    dispatch({ type: Actions.add, payload: inputRef.current.value });
  };

  const deleteTodo = (index) => {
    dispatch({ type: Actions.delete, payload: index });
  };

  return (
    <>
      <main className="h-screen w-full bg-neutral-200 flex items-center justify-center flex-col">
        <section className="w-full  flex items-center justify-center">
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter you new todo"
            className="pl-1 input"
          />
          <button className="btn" onClick={() => addTodo()}>
            ADD
          </button>
        </section>

        {/* todos container */}
        <section className="flex flex-col w-full  px-10 items-start">
          <ul className="list-disc w-full">
            {state.todos ? (
              state.todos.map((todo, index) => {
                return (
                  <div key={index} className="w-[100%] flex gap-1 items-center justify-between">
                    <li key={index} className="text-ellipse">
                      {todo}
                    </li>
                    <button
                      className="btn bg-red-700"
                      onClick={() => deleteTodo(index)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            ) : (
              <p>no todos</p>
            )}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Todo;
