import React, { useState, useEffect } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";


const baseURL = 'http://localhost:8000';


const Card = ({ handleEdit, handleReRender, empData }) => {

  const { firstname, lastname, job, email, image } = empData
  const [DropDown, setDropDown] = useState(false)

  
  const handleDelete = async (id) => {
    try {
        const res = await fetch(`${baseURL}/employee/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await res.json();
        handleReRender(data);
    } catch (error) {
        console.log(error);
    }
  }
  

  return (
    <div>
        <div>
            <div>
                <BsThreeDotsVertical size={20} onClick={() => setDropDown(!DropDown)} />
                {
                    DropDown && <ul
                        onMouseLeave={() => setDropDown(false)}
                    >
                        <li onClick={() => handleEdit(empData._id)}>Edit</li>
                        <li onClick={() => handleDelete(empData._id)}>Delete</li>
                    </ul>
                }
            </div>
            <div>
                <img src={image} alt={firstname} />
            </div>

            <div>
                <div>{firstname} {lastname}</div>
                <div>{email}</div>
            </div>

            <div>
                <div>{job}</div>
            </div>
        </div>
    </div>
  )
}

export default Card