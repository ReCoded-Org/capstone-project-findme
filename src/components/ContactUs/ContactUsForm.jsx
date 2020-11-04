import React, { useState, useEffect } from 'react'
import Input from "./Input";
import { useForm, Form } from './useForm';
import {msgicon}  from '../../images/msg.svg'
import firebase from '../../firebase'



const initialFValues = {
    name: '',
    email: '',
    subject: '',
    msg: '',
}
export default function ContactUsForm() {

   
    const validate = (fieldValues = values) => {
        let temp = {...errors }
        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "" : "This field is required."
        if ('subject' in fieldValues)
            temp.subject = fieldValues.subject ? "" : "This field is required."
        if ('msg' in fieldValues)
            temp.msg = fieldValues.msg ? "" : "This field is required."
       
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email)&&fieldValues.email ? "" : "Email is not valid."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            //console.log(values);
            firebase.firestore().collection("ContactUs").add( values )
            .then(()=>{
                setValues('')
                alert("Your Mesaage was sent successfully.")
            })
            resetForm()
        }
    }

    return ( 
         <Form onSubmit={handleSubmit}>
            <div  className='flex flex-col w-full space-y-4 '>
            
                <Input
                    name="name"
                    label="Full Name"
                    value={values.name}
                    onChange={handleInputChange}
                    error={errors.name}
                    multi={false}
                />
                <Input
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    multi={false}

                />
                <Input
                    name="subject"
                    label="Subject"
                    value={values.subject}
                    onChange={handleInputChange}
                    error={errors.subject}
                    multi={false}

                />
                <Input
                    name="msg"
                    label="Message"
                    value={values.msg}
                    onChange={handleInputChange}
                    error={errors.msg}
                    multi={true}

                />
              
                
                <div className="pr-0 pl-0 lg:  xl:self-end lg:self-end   sm:self-center self-center sm:pt-2 sm:pb-2 pt-2 pb-2">
                    <button className=" flex-row-reverse inline-flex xl:w-auto w-full mx-3 px-8 py-1 rounded-full text-white bg-gradient-to-l from-blue-700 to-blue-400 items-center justify-center focus:outline-none">
                        <img src={msgicon} alt="" className="origin-top-right pr-5 h-5" ></img>
                        <span>Send a message</span>
                    </button>
                </div>
                
            </div>
    </Form>
    )
}
