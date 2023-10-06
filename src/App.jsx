import Calendar from "./components/Calendar/Calendar"
import Login from "./components/Login"
import { BrowserRouter, Route,Routes } from "react-router-dom"
import Register from "./components/Register"
import CalendarEventModal from "./components/Calendar/CalendarEventModal"


function App() {
  return (
    <div className="h-screen w-full">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/calendar' element={<Calendar/>} />
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/test' element={<CalendarEventModal/>} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
