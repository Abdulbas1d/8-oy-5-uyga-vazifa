import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import TodoList from './pages/TodoList'
import UserData from './pages/UserData'
import OnlineShop from './pages/OnlineShop'
import Cart from './pages/Cart'

function App() {
  return (
    <div>
      <Routes>
        <Route index element = {<MainLayout><TodoList /></MainLayout>} />
        <Route path='/userData' element = {<MainLayout><UserData /></MainLayout>} />
        <Route path='/onlineShopping' element = {<MainLayout><OnlineShop /></MainLayout>} />
        <Route path='/cart' element = {<MainLayout><Cart /></MainLayout>} />
      </Routes>
    </div>
  )
}

export default App
