import React, { useState, useEffect } from 'react'
import './MissingPersonForm.scss'
import { arrow, save, cancel } from './ImportImg'
import UploadImg from './upload'
import { useForm, Form } from './useForm'
import { Input, Select, Textarea, SwitchToggle,Button } from './FormControl'


const initialFValues = {
  id: 0,
  fristName: '',
  secondName: '',
  thirdName: '',
  surname: '',
  phoneNumber: '',
  phoneNumber2: '',
  locationOfLoss: '',
  lostSince: '',
  lastPlaceSeen: '',
  lastUpdate: '',
  age: '',
  gender: '',
  relationship: '',
  job: '',
  notes: '',
  specialSituotion: '',
  isLookingFor: false,
  createAt: new Date(),
}

const MissingPersonForm = () => {

  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <div className='bg-white shadow-md  rounded-3xl m-5'>
      <div className="flex xs:block sm:block md:flex xl:flex mb-6">
        <div className="w-1/4 p-2  text-center hidden md:block  "></div>
        <div className="w-3/4 p-2  text-center md:text-left  "><Icon srcName={arrow} srcAlt='left-arrow' /><Title title='Add A Missing Person' /></div>
      </div>
      <Form >
        <div className="flex xs:block sm:block md:flex xl:flex">
          <div className=" p-2 xs:w-full sm:w-full md:w-1/4   text-center     ">
            <UploadImg />
          </div>
          <div className="md:w-3/4 p-4  sm:w-full ">

            {/* First Name , Second Name ,Third Name ,Surname*/}
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-2/4 lg:w-1/4 p-2 mb-6 md:mb-0">
                <Input
                  required={true}
                  name="fristName"
                  label="Frist Name"
                  type="text"
                  value={values.fristName}
                  onChange={handleInputChange}

                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4 p-2 mb-6 md:mb-0">
                <Input
                  required={false}
                  name="secondName"
                  label="Second Name"
                  type="text"
                  value={values.secondName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4 p-2 mb-6 md:mb-0">
                <Input
                  required={false}
                  name="thirdName"
                  label="Third Name"
                  type="text"
                  value={values.thirdName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4 p-2 mb-6 md:mb-0">

                <Input
                  required={true}
                  name="surname"
                  label="Surname"
                  type="text"
                  value={values.surname}
                  onChange={handleInputChange}
                />
              </div>

            </div>
            {/* Phone Number , Phone Number 2 */}
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-2/4 lg:w-1/4 p-2 mb-6 md:mb-0">
                <Input
                  required={true}
                  name="phoneNumber"
                  label="Phone Number"
                  type="tel"
                  value={values.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4 p-2 mb-6 md:mb-0">
                <Input
                  required={false}
                  name="phoneNumber2"
                  label="phone Number"
                  type="tel"
                  value={values.phoneNumber2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full md:w-4/4 lg:w-2/4 p-2 mb-6 md:mb-0 pt-4">
                <div className='inline'>
                  Missing Person
              <SwitchToggle />
               Looking for family
              </div></div>
            </div>
            {/* Location of Loss ,Lost Since ,Last Place Seen,Last Update*/}
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-2/4 lg:w-1/4  p-2 mb-6 md:mb-0">
                <Input
                  required={true}
                  name="locationOfLoss"
                  label="Location Of Loss"
                  type="text"
                  value={values.locationOfLoss}
                  onChange={handleInputChange}

                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4  p-2 mb-6 md:mb-0">
                <Input
                  required={true}
                  name="lostSince"
                  label="Lost Since"
                  type="date"
                  value={values.lostSince}
                  onChange={handleInputChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4 p-2 mb-6 md:mb-0">
                <Input
                  required={true}
                  name="lastPlaceSeen"
                  label="Last Place Seen"
                  type="text"
                  value={values.lastPlaceSeen}
                  onChange={handleInputChange}

                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4  p-2 mb-6 md:mb-0">
                <Input
                  required={false}
                  name="lastUpdate"
                  label="Last Update"
                  type="text"
                  value={values.lastUpdate}
                  onChange={handleInputChange}

                />
              </div>
            </div>
            {/* Age , Gender ,Relationship , Job */}

            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-2/4 lg:w-1/4  p-2 mb-6 md:mb-0">
                <Input
                  required={false}
                  name="age"
                  label="Age"
                  type="number"
                  value={values.age}
                  onChange={handleInputChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4  p-2 mb-6 md:mb-0">
                <Select
                  name="gender"
                  label="gender"
                  value={values.gender}
                  onChange={handleInputChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4  p-2 mb-6 md:mb-0">
                <Input
                  required={true}
                  name="relationship"
                  label="Relationship"
                  type="text"
                  value={values.relationship}
                  onChange={handleInputChange}

                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4  p-2 mb-6 md:mb-0">
                <Input
                  required={false}
                  name="job"
                  label="Job"
                  type="text"
                  value={values.job}
                  onChange={handleInputChange}

                />
              </div>
            </div>
            {/* textarea :Notes , Special Situotion  */}
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-2/4 p-2 mb-6 md:mb-0">
                <Textarea
                  name="notes"
                  label="Notes"
                  value={values.notes}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full md:w-2/4 p-2 mb-6 md:mb-0">
                <Textarea
                  name="specialSituotion"
                  label="Special Situotion"
                  value={values.specialSituotion}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* Button  */}
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
                <p class="text-sm "> <span className='text-red-500'>*</span> marked fields are required</p>
              </div>
              <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0 md:justify-end justify-center flex ">
                <Button onClickMethod='' buttonName='Cancel' icon={cancel} type='reset'
                  nameClass='rounded-full w-32 h-10 bg-white text-gray-700  border border-gray-700 border-solid' />
                <Button onClickMethod='' buttonName='Save' icon={save} type='submit'
                  nameClass='rounded-full w-32 h-10 bg-gradient-to-r from-blue-400 to-blue-700 text-white ' />
              </div>
            </div>


          </div>
        </div></Form>
    </div>
  )


}




const Icon = (props) => {
  return (
    <img src={props.srcName} alt={props.srcAlt} className='icon inline mr-5 md:mr-5 hover:opacity-75 ' />
  )
}
const Title = (props) => {
  return (
    <h1 className='md:text-2xl lg:font-medium inline text-base'>{props.title}</h1>
  )
}

export default MissingPersonForm