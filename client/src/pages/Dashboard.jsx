import React, { useState, useEffect } from 'react'
import MainSection from '../components/MainSection/MainSection'
import LeftBar from '../components/LeftBar'


const Dashboard = () => {

  const [EmployeeId, setEmployeeId] = useState('')
  console.log(EmployeeId);  
  return (
    <div>
        <LeftBar employeeId={EmployeeId} />
        <MainSection setEmployeeId={setEmployeeId} />
    </div>
  )
}

export default Dashboard