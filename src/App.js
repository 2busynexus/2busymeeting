import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import StatusComponent from "./components/StatusComponent"
import WelcomeComponent from "./components/WelcomeComponent"

function App() {

  return (
  <div className="bg-dark">
    <WelcomeComponent />
    <StatusComponent />
  </div>
  )

}

export default App