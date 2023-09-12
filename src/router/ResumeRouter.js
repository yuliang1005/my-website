import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PersonalInformation from '../views/PersonalInformation/PersonalInformation'
import Introduction from '../views/Introduction/Introduction'
import Experience from '../views/Experience/Experience'

export default function ResumeRouter() {
  return (
    <Routes>
        <Route path='/resume/personal-information' element={<PersonalInformation />}></Route>
        <Route path='/resume/introduction' element={<Introduction />}></Route>
        <Route path='/resume/experience' element={<Experience />}></Route>
    </Routes>
  )
}
