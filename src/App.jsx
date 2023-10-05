import Calendar from "./components/Calendar/Calendar"
import Login from "./components/Login"
import { BrowserRouter, Route,Routes } from "react-router-dom"
import Register from "./components/Register"


function App() {
  return (
    <div className="h-screen w-full">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/calendar' element={<Calendar/>} />
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
