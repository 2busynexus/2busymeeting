import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import StatusComponent from "./components/StatusComponent"
import Home from "./pages/Home"
import Meeting from "./pages/Meeting"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <div className="bg-dark">
        <StatusComponent />
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path='/meeting/:roomId' element = {<Meeting/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )

}

export default App

//<StatusComponent />