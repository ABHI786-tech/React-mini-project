import React, { useEffect, useState } from 'react'
import axios from 'axios'
const FormSubmission = () => {
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        gender: "",
        subject: "",
        resume: "",
        about: "",

    })
    const [errorData, setErrorData] = useState({
        firstname: false,
        lastname: false,
        email: false,
        mobile: false,
        gender: false,
        subject: false,
        resume: false,
        about: false,

    })


    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
        setErrorData({
            ...errorData,
            [e.target.name]: false,
        })
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        console.log("data", data)
        let error = {
        }
        if (!data.firstname || data.firstname == "") {
            error.firstname = true
        }
        if (!data.lastname || data.lastname == "") {
            error.lastname = true
        }
        if (!data.email || data.email == "") {

            error.email = true
        }
        if (!data.mobile || data.mobile == "") {

            error.mobile = true

        }
        if (!data.resume || data.resume == "") {

            error.resume = true

        }
        if (!data.gender || data.gender == "") {

            error.gender = true

        }
        if (!data.subject || data.subject == "") {

            error.subject = true

        }
        setErrorData({
            ...error
        })
    }

    const handleOnlyAlphabet = (e) => {
        const regex = /^[A-Za-z ]+$/;
        let key = e.key
        // Allow control keys
        const allowedKeys = [
            "Backspace",
            "Delete",
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Tab",
        ];

            if (allowedKeys.includes(key)) {
                return; // allow these keys
            }
            let isAlphabet = regex.test(key)
            if (!isAlphabet) { return e.preventDefault(); }
        }
 
        return (
            <div className='px-14 py-7 w-full flex justify-center'>
                <form className='w-[64%] border-gray-900 border px-16 py-4 rounded-3xl ' onSubmit={(e) => onSubmitHandler(e)}>
                    <div className='my-5'>
                        <h1 className='text-center text-4xl font-bold'>Simple Form </h1></div>
                    {/* FIRST NAME */}
                    <div className='my-3'>
                        <label htmlFor="firstname" className="block mb-2.5 text-md font-medium text-heading" >
                            First Name
                        </label>
                        <input type="text" id="firstname"
                            name="firstname" value={data.firstname} placeholder="Enter your First Name" className='border-2 px-3 rounded w-full border-gray-400 outline-none focus:border-blue-800   '
                            onChange={(e) => handleChange(e)}
                            onKeyDown={handleOnlyAlphabet}
                        />
                        {errorData?.firstname && <p className='error text-red-700'>First name is required </p>}
                    </div>
                    {/* last name */}
                    <div className='my-3'>
                        <label htmlFor="lastname" className="block mb-2.5 text-md font-medium text-heading" > Last Name </label>
                        <input type="text" id="lastname" name="lastname" placeholder="Enter your Last Name" className='border-2 px-3 rounded w-full border-gray-400 outline-none focus:border-blue-800' onChange={(e) => handleChange(e)}
                            onKeyDown={handleOnlyAlphabet} />
                        {errorData?.lastname && <p className='error text-red-700'>last name is required </p>}
                    </div>
                    {/* email address  */}
                    <div className='my-3'>
                        <label htmlFor="email" className="block mb-2.5 text-md font-medium text-heading" >E-mail</label>
                        <input type="email" name="email"
                            // onBlur={(e) => console.log(e, "blur")}
                            // onFocus={(e) => console.log(e, "focus")}
                            placeholder="Enter your email " className='border-2 px-3 rounded w-full border-gray-400 outline-none focus:border-blue-800' onChange={(e) => handleChange(e)} />
                        {errorData?.email && <p className='error text-red-700'>email is required</p>}</div>
                    {/* mobile no. */}
                    <div className='my-3'>
                        <label htmlFor="mobile" className="block mb-2.5 text-md font-medium text-heading" >
                            Mobile No.
                        </label>
                        <input type="tel" name="mobile" placeholder="Enter your Mobile no. " className='border-2 px-3 rounded w-full border-gray-400 outline-none focus:border-blue-800'
                            value={data.mobile}
                            onChange={(e) => {
                                let value = e.target.value;

                                // Remove all non-digit characters
                                value = value.replace(/\D/g, "");

                                // Max 10 digits allowed
                                if (value.length > 10) value = value.slice(0, 10);

                                // Apply formatting
                                let formatted = value;

                                if (value.length > 3 && value.length <= 6) {
                                    formatted = `${value.slice(0, 3)} ${value.slice(3)}`;
                                }
                                 if (value.length > 6) {
                                    formatted = `${value.slice(0, 3)} ${value.slice(3, 6)} ${value.slice(6)}`;
                                }

                                setData({
                                    ...data,
                                    mobile: formatted,
                                });
                            }}
                        />
                        {errorData?.mobile && <p className='error text-red-700'>mobile is required</p>}</div>
                    {/* gender */}
                    <div className='my-3'>
                        <label htmlFor="gender" className="block mb-2.5 text-md font-medium text-heading" >
                            Gender
                        </label>
                        <div>
                            <label htmlFor="male" className='mx-3'>
                                <input type="radio" name="gender" id="male" value={"male"} onChange={(e) => handleChange(e)} />male
                            </label>
                            <label htmlFor="female" className='mx-3'>
                                <input type="radio" name="gender" id="female" value={"female"} onChange={(e) => handleChange(e)} />female
                            </label>
                            <label htmlFor="other" className='mx-3'>
                                <input type="radio" name="gender" id="other" value={"other"} onChange={(e) => handleChange(e)} />other
                            </label>
                        </div>
                        {errorData?.gender && <p className='error text-red-700'>gender is required</p>}
                    </div>
                    {/* subject */}
                    <div className='my-3'>
                        <label htmlFor="subject" className="block mb-2.5 text-md font-medium text-heading" >
                            Your Favourite Subject
                        </label>
                        <div >
                            <label htmlFor="english" className='mx-3'>
                                <input type="checkbox" name="subject" value={"english"} onChange={(e) => handleChange(e)} />english
                            </label>
                            <label htmlFor="punjabi" className='mx-3'>
                                <input type="checkbox" name="subject" value={"punjabi"} onChange={(e) => handleChange(e)} />Punjabi
                            </label>
                            <label htmlFor="math" className='mx-3' >
                                <input type="checkbox" name="subject" value={"math"} onChange={(e) => handleChange(e)} />Math
                            </label>
                            <label htmlFor="science" className='mx-3' >
                                <input type="checkbox" name="subject" value={"science"} onChange={(e) => handleChange(e)} />Science
                            </label>

                        </div>
                        {errorData?.subject && <p className='error text-red-700'>subject is required</p>}
                    </div>
                    {/* upload resume */}
                    <div className='my-3'>
                        <label htmlFor="resume" className="block mb-2.5 text-md font-medium text-heading" >
                            Upload your Resume
                        </label>
                        <input type="file" name="resume" placeholder='upload your resume' className='border-2 px-3 rounded w-full border-gray-400 outline-none focus:border-blue-800' onChange={(e) => handleChange(e)} />
                        {errorData?.resume && <p className='error text-red-700'>resume is required</p>}
                    </div>
                    {/* about */}
                    <div className='my-3'>
                        <label htmlFor="about" className="block mb-2.5 text-md font-medium text-heading" >
                            About
                        </label>
                        <textarea name="about" placeholder='about section' className='border-2 px-3 rounded w-full border-gray-400 outline-none focus:border-blue-800' onChange={(e) => handleChange(e)} />
                        {errorData?.resume && <p className='error text-red-700'>about is required</p>}
                    </div>


                    <div className='mb-5'>
                        <button className='bg-blue-800 px-3 py-2 rounded' type='submit'  >Submit Now</button>
                    </div>

                    
                </form>
            </div >
        )
    }

    export default FormSubmission;