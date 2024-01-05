import React, { useState } from "react"

import Todo from "../models/todo"

type TodoContextObj = {
   items: Todo[];
   addTodo: (text: string) => void;
   removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodoContextObj>({
   items: [],
   addTodo: () => { },
   removeTodo: (id: string) => { }
})

const TodoContextProvider: React.FC = ({ children }) => {
   const [todos, setTodos] = useState<Todo[]>([])

   const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText)

      setTodos((prevTodos) => {
         return prevTodos.concat(newTodo)
      })
   }

   const removeTodoHandler = (todoId: string) => {
      setTodos((preveTodos) => {
         return preveTodos.filter(todo => todo.id !== todoId)
      })
   }

   const contextValue: TodoContextObj = {
      items: todos,
      addTodo: addTodoHandler,
      removeTodo: removeTodoHandler
   }

   return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>
}

export default TodoContextProvider