import React, { useState, useEffect } from 'react'
import MainSection from '../components/MainSection/MainSection'
import LeftBar from '../components/LeftBar'


const Dashboard = () => {

  const [employeeId, setEmployeeId] = useState('')
  console.log(employeeId);  
  return (
    <div>
        <LeftBar employeeId={employeeId} />
        <MainSection setEmployeeId={setEmployeeId} />
    </div>
  )
}

export default Dashboard