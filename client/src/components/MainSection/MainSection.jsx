import ModalPopUp from '../ModalPopUp/ModalDetails'
import EditModalDetails from '../ModalPopUp/EditModalDetails'
import Card from './component/Card'
import { BiSearch } from 'react-icons/bi'
import { IoMdAdd } from 'react-icons/io'
import React, { useState, useEffect } from 'react'


const baseURL = 'http://localhost:8000';


const MainSection = ({ setEmployeeId }) => {

  const [ShowModal, setShowModal] = useState(false)
  const [EditModal, setEditModal] = useState(false)
  const [employees, setEmployees] = useState([])
  const [EmpById, setEmpById] = useState([])
  const [ReRender, setReRender] = useState(false)

  const getAllEmployee = async () => {
    try {
        const res = await fetch(`${baseURL}/employee`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await res.json(); 
        setEmployees(data);
    } catch (error) {
        console.log(error);
    }
  }

  const getEmployeebyId = async (id) => {
    try {
        const res = await fetch(`${baseURL}/employee/${id}`, { 
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await res.json(); 
        setEmpById(data);
    } catch (error) {
        console.log(error);
    }
  }

  const handleSearch = async (e) => {
    try {
        const res = await fetch(`${baseURL}/searchemployee/${e.target.value}`, { // Include the base URL
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await res.json(); 
        setEmployees(data);
    } catch (error) {
        console.log(error);
    }
  }

  const handleEdit = async (id) => {
    getEmployeebyId(id)
    setEditModal(true)
  }

  const handleReRender = async () => {
    setReRender(true)
  }

  useEffect(() => {
    getAllEmployee()
  }, [ShowModal, EditModal, ReRender])

  
  return (
    <>
    {
        ShowModal && <ModalPopUp setShowModal={setShowModal} />
    }
    {
        EditModal && <EditModalDetails setEditModal={setEditModal} EmpById={EmpById} />
    }

    <main>
        <div>
            <div>People <span>{employees.length}</span></div>
            <div>
                <div>
                    <input type="text" placeholder='Search by name, email, designation...' onChange={handleSearch} />
                    <BiSearch size={20} />
                </div>
                <button type="button" onClick={() => setShowModal(true)}><IoMdAdd size={20} color='#fffff' />Add Employee+</button>
            </div>

            <div>
                {
                employees && employees.map((emp) => {
                    return <div key={emp._id} onClick={() => setEmployeeId(emp._id)}>
                    <Card
                        empData={emp}
                        handleEdit={handleEdit}
                        handleReRender={handleReRender} />
                    </div>
                })
                }
            </div>
        </div>
    </main>
    </>
  )
}

export default MainSection