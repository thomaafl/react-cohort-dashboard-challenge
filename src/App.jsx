import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./assets/components/Header/Header"
import LeftMenu from './assets/components/LeftMenu/LeftMenu'
import CreatePost from './assets/components/CreatePost/CreatePost'
import Post from './assets/components/Feed/Post'
import Home from './assets/components/Feed/Home'
function App() {
  

  return (
    <>
      <div className="root-container">
        <Header />
        <div className="row-container">
          <LeftMenu />

          <div className="feed-container">
            <Home />
            


          </div>
        </div>
      </div>
    </>
  )
}

export default App
