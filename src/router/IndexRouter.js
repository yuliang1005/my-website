import React from 'react'
import { Navigate, Route,Routes } from 'react-router-dom'
import Resume from '../views/Resume'
import Home from '../views/Home'

export default function indexRouter() {
  return (
    <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='*' element={<Navigate to='/home'/>}></Route>
    </Routes>
  )
}
