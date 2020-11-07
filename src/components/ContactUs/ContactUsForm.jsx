import React from 'react'
import Input from "./Input";
import { useForm, Form } from './useForm';
import {msgicon}  from '../../images/icons/send.png'
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
                setValues(initialFValues)
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
              
                
              <div className=" place-self-center sm:place-self-center xl:w-auto lg:w-auto  w-3/4 xl:self-start xl:w-3/4 lg:self-start lg:w-auto sm:w-3/5   sm:self-center self-center sm:pt-2 sm:pb-2 pt-2 pb-2">
                    <button className=" text-center h-8 items-center items-center  flex sm:p-1 flex-row-reverse inline-flex xl:w-auto w-full  lg:w-auto py-1 rounded-full text-white bg-gradient-to-l from-purple-800 to-teal-500   focus:outline-none">
                        <img src={msgicon} alt="" className=" h-5 w-5 " ></img>
                        <span className='pl-2 pr-2 text-center  sm:text-center sm:text-sm text-xs  '>Send a message</span>
                    </button>
                </div>  
                
            </div>
           
                
    </Form>
    )
}
