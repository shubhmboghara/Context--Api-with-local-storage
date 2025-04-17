import { createContext, useContext} from "react";

export const TodoContexts = createContext({

    todos:[
        {
            id:1,
            todo:"Todo msg", 
            completed:false,

        },

    ], 
    addTodo: (todo) => {},
    updatedTodo:(id,todo) => {},
    deleteTodo:(id) => {},
    ToggleComplete:(id) => {}


})

export const useTodo = () => {
  return useContext(TodoContexts)

}

export const TodoProvider = TodoContexts.Provider