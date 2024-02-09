import React, { useState, useEffect } from 'react'


const baseURL = 'http://localhost:8000';


const LeftBar = ({ employeeId }) => {

    const [EmpById, setEmpById] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        job: '',
        dateOfJoining: '',
        image: ''
    })


    useEffect(() => {
        const getEmployeeById = async () => {
            try {
                const res = await fetch(`${baseURL}/employee/${employeeId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!res.ok) {
                    throw new Error("Failed to fetch the data.");
                }
                const data = await res.json();
                setEmpById(data);
            } catch (error) {
                console.error(error);
            }
        };
        getEmployeeById();
    }, [employeeId]);


    return (
        <div>
            <nav className="">
                <div className="">
                    <div>Full Detail</div>
                    <img src={EmpById.image}/>
                    <h1>{EmpById.firstname} {EmpById.lastname}</h1>
                    <p>{EmpById.email}</p>
                    <p>{EmpById.phone}</p>
                    <p>{EmpById.job}</p>
                    <p>{EmpById.dateOfJoining}</p>
                </div>
            </nav>
        </div>
    )
}

export default LeftBar