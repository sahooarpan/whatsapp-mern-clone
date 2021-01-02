import React from 'react'
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";
import './App.css'

const App = () => {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar/>
        <Chat/>
    </div>
  </div>
  )
}

export default App
