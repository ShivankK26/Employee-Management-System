import React from 'react'
import ModalPopUp from '../ModalPopUp/ModalDetails'
import EditModalDetails from '../ModalPopUp/EditModalDetails'
import Card from './component/Card'
import { BiSearch } from 'react-icons/bi'
import { IoMdAdd } from 'react-icons/io'
import { useEffect } from 'react'


const MainSection = ({ setEmployeeId }) => {

  const [ShowModal, setShowModal] = useState(false)
  const [EditModal, setEditModal] = useState(false)
  const [Employees, setEmployees] = useState([])
  const [EmpById, setEmpById] = useState([])
  const [ReRender, setReRender] = useState(false)


  const getAllEmployee = async () => {
    try {
        const res = await fetch('/employee', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = res.json();
        setEmployees(data);
    } catch (error) {
        console.log(error);
    }
  }

  const getEmployeebyId = async (id) => {
    try {
        const res = await fetch(`/employee/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = res.json();
        setEmpById(data);
    } catch (error) {
        console.log(error);
    }
  }

  const handleSearch = async (e) => {
    try {
        const res = await fetch(`/searchemployee/${e.target.value}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = res.json();
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
            <div>People <span>{Employees.length}</span></div>
            <div>
                <div>
                    <input type="text" placeholder='Search by name, email, designation...' onChange={handleSearch} />
                    <BiSearch size={20} />
                </div>
                <button type="button"></button>
            </div>
        </div>
    </main>
    </>
  )
}

export default MainSection