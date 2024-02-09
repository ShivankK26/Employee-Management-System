import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react'


const baseURL = 'http://localhost:8000';


const ModalDetails = ({ setShowModal }) => {

  const [Loading, setLoading] = useState(false);
  
  const createEmployee = async (values) => {
    setLoading(true)
    try {
        const res = await fetch(`${baseURL}/employee`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(res);
        setLoading(false);
        setShowModal(false)
    } catch (error) {
        console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        job: '',
        dateOfJoining: '',
        image: ''
    },
    onSubmit: values => {
        createEmployee(values)
    },
  })

  return (
    <div>
        <form action="" onSubmit={formik.handleSubmit}>
            <div>
                <div>New Employee Details</div>
            </div>

            <div>
                <div>
                    <label htmlFor="">First Name</label>
                    <input type="text" name='firstname'
                        required
                        onSubmit={formik.handleChange}
                        values={formik.values.firstname}
                    />
                </div>

                <div>
                    <label htmlFor="">Last Name</label>
                    <input type="text" name='lastname'
                        required
                        onSubmit={formik.handleChange}
                        values={formik.values.lastname}
                    />
                </div>

                <div>
                    <label htmlFor="">Image</label>
                    <input type="text" name='image'
                        required
                        onSubmit={formik.handleChange}
                        values={formik.values.image}
                    />
                </div>

                <div>
                    <label htmlFor="">Email Address</label>
                    <input type="email" name='email'
                        required
                        onSubmit={formik.handleChange}
                        values={formik.values.email}
                    />
                </div>

                <div>
                    <label htmlFor="">Phone</label>
                    <input type="text" name='phone'
                        required
                        onSubmit={formik.handleChange}
                        values={formik.values.phone}
                    />
                </div>

                <div>
                    <label htmlFor="">Job Position</label>
                    <input type="text" name='job'
                        required
                        onSubmit={formik.handleChange}
                        values={formik.values.job}
                    />
                </div>

                <div>
                    <label htmlFor="">Date Of Joining</label>
                    <input type="text" name='dateofjoining'
                        required
                        onSubmit={formik.handleChange}
                        values={formik.values.dateofjoining}
                    />
                </div>

                <div>
                    <button type="submit">{Loading ? 'Saving...' : 'Save Details'}</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ModalDetails