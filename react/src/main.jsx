import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Parent from './context/Parent'
import Todo from './projects/todoapp/Todo.jsx'

createRoot(document.getElementById('root')).render(
 <>
  {/* <App /> */}
  <Todo/>

 </>
,)
