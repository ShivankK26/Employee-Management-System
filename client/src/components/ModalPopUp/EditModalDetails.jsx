import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'


const baseURL = 'http://localhost:8000';


const EditModalDetails = ({ EmpById, setEditModal }) => {
  
  const { firstname, lastname, email, phone, job, dateOfJoining, image } = EmpById;
  const [Loading, setLoading] = useState(false)

  const handleEdit = async () => {
    setLoading(true)
    try {
        const res = await fetch(`${baseURL}/employee/${EmpById._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!res.ok) {
            throw new Error("Failed to fetch the data.")
        }
        const data = await res.json();
        setLoading(false)
        setEditModal(false)
        console.log(res);
    } catch (error) {
        console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
        firstname,
        lastname,
        email,
        phone,
        job,
        dateOfJoining,
        image,
    },
    onSubmit: values => {
        handleEdit(values)
    }
  })
  console.log(formik.initialValues)

  
  return (
    <div>
        <form action="" onSubmit={formik.handleSubmit}>
            <div>New Employee Details</div>
            <div>
                <div>
                    <label htmlFor="">First Name</label>
                        <input type="text" name='firstname' 
                        required
                        defaultValue={firstname}
                        onChange={formik.handleChange}
                        values={formik.values.firstname}
                        />
                </div>

                <div>
                    <label htmlFor="">Last Name</label>
                        <input type="text" name='lastname' 
                        required
                        defaultValue={lastname}
                        onChange={formik.handleChange}
                        values={formik.values.lastname}
                        />
                </div>

                <div>
                    <label htmlFor="">Image</label>
                        <input type="text" name='image' 
                        required
                        defaultValue={image}
                        onChange={formik.handleChange}
                        values={formik.values.image}
                        />
                </div>

                <div>
                    <label htmlFor="">Email Address</label>
                        <input type="email" name='email' 
                        required
                        defaultValue={email}
                        onChange={formik.handleChange}
                        values={formik.values.email}
                        />
                </div>

                <div>
                    <label htmlFor="">Phone</label>
                        <input type="text" name='email' 
                        required
                        defaultValue={phone}
                        onChange={formik.handleChange}
                        values={formik.values.phone}
                        />
                </div>
                
                <div>
                    <label htmlFor="">Job Position</label>
                        <input type="text" name='job' 
                        required
                        defaultValue={job}
                        onChange={formik.handleChange}
                        values={formik.values.job}
                        />
                </div>

                <div>
                    <label htmlFor="">Date Of Joining</label>
                        <input type="date" name='dateofjoining' 
                        required
                        defaultValue={dateofjoining}
                        onChange={formik.handleChange}
                        values={formik.values.dateofjoining}
                        />
                </div>
            </div>
            <div>
                <button type='submit'>{Loading ? 'Edit' : 'Edit and Save'}</button>
            </div>
        </form>
    </div>
  )
}

export default EditModalDetails