
import './App.css'
import { Register } from './component/Register'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { TodoList } from './component/TodoList';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Register/>
    },
    {
      path: "/list",
      element: <TodoList/>
    }
  ])
  

  return (
   <>
    <RouterProvider router={router} />
   </>
  )
}

export default App
