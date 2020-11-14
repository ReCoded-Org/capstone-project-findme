import React, { useState, useEffect } from 'react';
import './MissingPersonForm.scss';
import { arrow, save, cancel } from './ImportImg';
import UploadImg from './upload';
import { useForm, Form } from './useForm';
import { Input, Select, Textarea, SwitchToggle, Button } from './FormControl';
import * as employeeService from './storg';
import {useTranslation} from "react-i18next";


const MissingPersonForm = () => {
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
    img: '',
  };

  console.log('img' + initialFValues.img);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('fristName' in fieldValues) {
      if (!fieldValues.fristName) {
        temp.fristName = 'This field is required.';
      }
      if (fieldValues.fristName.length > 0) {
        temp.fristName = fieldValues.fristName.match(/^[a-zA-Z]+$/)
          ? ''
          : 'Please enter only letters.';
      }
    }

    if ('secondName' in fieldValues) {
      if (fieldValues.secondName.length > 0) {
        temp.secondName = fieldValues.secondName.match(/^[a-zA-Z]+$/)
          ? ''
          : 'Please enter only letters.';
      }
    }
    if ('thirdName' in fieldValues) {
      if (fieldValues.thirdName.length > 0) {
        temp.thirdName = fieldValues.thirdName.match(/^[a-zA-Z]+$/)
          ? ''
          : 'Please enter only letters.';
      }
    }
    if ('surname' in fieldValues) {
      if (!fieldValues.surname) {
        temp.surname = 'This field is required.';
      }
      if (fieldValues.surname.length > 0) {
        temp.surname = fieldValues.surname.match(/^[a-zA-Z]+$/)
          ? ''
          : 'Please enter only letters.';
      }
    }
    if ('phoneNumber' in fieldValues) {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!fieldValues.phoneNumber) {
        temp.phoneNumber = 'This field is required.';
      }
      if (fieldValues.phoneNumber.length > 0) {
        if (pattern.test(fieldValues.phoneNumber)) {
          temp.phoneNumber =
            fieldValues.phoneNumber.length > 8
              ? ''
              : 'Please enter valid phone number.';
        } else {
          temp.phoneNumber = 'Please enter only number.';
        }
      }
    }
    if ('phoneNumber2' in fieldValues) {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (fieldValues.phoneNumber2.length > 0) {
        if (pattern.test(fieldValues.phoneNumber)) {
          temp.phoneNumber2 =
            fieldValues.phoneNumber2.length > 8
              ? ''
              : 'Please enter valid phone number.';
        } else {
          temp.phoneNumber2 = 'Please enter only number.';
        }
      }
    }

    if ('locationOfLoss' in fieldValues)
      temp.locationOfLoss = fieldValues.locationOfLoss
        ? ''
        : 'This field is required.';
    if ('lostSince' in fieldValues)
      temp.lostSince = fieldValues.lostSince ? '' : 'This field is required.';
    if ('lastPlaceSeen' in fieldValues)
      temp.lastPlaceSeen = fieldValues.lastPlaceSeen
        ? ''
        : 'This field is required.';
    if ('relationship' in fieldValues)
      temp.relationship = fieldValues.relationship
        ? ''
        : 'This field is required.';

    if ('job' in fieldValues) {
      if (fieldValues.job.length > 0) {
        temp.job = fieldValues.job.match(/^[a-zA-Z]+$/)
          ? ''
          : 'Please enter only letters.';
      }
    }

    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === '');
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log(values);

      // resetForm()
    }
  };

  // Translation
  const [t, i18n] = useTranslation('common');
  
  return (
    <div className="bg-white shadow-md  rounded-3xl m-5">
      <div className="flex xs:block sm:block md:flex xl:flex mb-6">
        <div className="w-1/4 p-2  text-center hidden md:block  "></div>
        <div className="w-3/4 p-2  text-center md:text-left  ">
          <Icon srcName={arrow} srcAlt="left-arrow" />
          <Title title={t('translation.addAMissingPerson')} />
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <div className="flex xs:block sm:block md:flex xl:flex">
          <div className=" p-2 xs:w-full sm:w-full md:w-1/4   text-center     ">
            <UploadImg name="img" onChange={handleInputChange} />
          </div>
          <div className="md:w-3/4 p-4  sm:w-full ">
            {/* First Name , Second Name ,Third Name ,Surname*/}
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-2/4 lg:w-1/4 p-2 mb-6 md:mb-0">
                <Input
                  required={true}
                  name="fristName"
                  label={t('translation.firstName')}
                  type="text"
                  value={values.fristName}
                  onChange={handleInputChange}
                  error={errors.fristName}
                />
              </div>

              <div className="w-full md:w-2/4 lg:w-1/4 p-2 mb-6 md:mb-0">
                <Input
                  required={false}
                  name="secondName"
                  label={t('translation.secondName')}
                  type="text"
                  value={values.secondName}
                  onChange={handleInputChange}
                  error={errors.secondName}
                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4 p-2 mb-6 md:mb-0">
                <Input
                  required={false}
                  name="thirdName"
                  label={t('translation.thirdName')}
                  type="text"
                  value={values.thirdName}
                  onChange={handleInputChange}
                  error={errors.thirdName}
                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4 p-2 mb-6 md:mb-0">
                <Input
                  required={true}
                  name="surname"
                  label={t('translation.surname')}
                  type="text"
                  value={values.surname}
                  onChange={handleInputChange}
                  error={errors.surname}
                />
              </div>
            </div>
            {/* Phone Number , Phone Number 2 */}
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-2/4 lg:w-1/4 p-2 mb-6 md:mb-0">
                <Input
                  required={true}
                  name="phoneNumber"
                  label={t('translation.phoneNumber')}
                  type="tel"
                  value={values.phoneNumber}
                  onChange={handleInputChange}
                  error={errors.phoneNumber}
                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4 p-2 mb-6 md:mb-0">
                <Input
                  required={false}
                  name="phoneNumber2"
                  label={t('translation.phoneNumber2')}
                  type="tel"
                  value={values.phoneNumber2}
                  onChange={handleInputChange}
                  error={errors.phoneNumber2}
                />
              </div>
              <div className="w-full md:w-4/4 lg:w-2/4 p-2 mb-6 md:mb-0 pt-4">
                <div className="inline">
                {t('translation.missingPerson')}
                  <SwitchToggle
                    name="isLookingFor"
                    checked={values.isLookingFor}
                    onChange={handleInputChange}
                  />
                  {t('translation.lookingForFamily')}
                </div>
              </div>
            </div>
            {/* Location of Loss ,Lost Since ,Last Place Seen,Last Update*/}
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-2/4 lg:w-1/4  p-2 mb-6 md:mb-0">
                <Input
                  required={true}
                  name="locationOfLoss"
                  label={t('translation.locationOfLoss')}
                  type="text"
                  value={values.locationOfLoss}
                  onChange={handleInputChange}
                  error={errors.locationOfLoss}
                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4  p-2 mb-6 md:mb-0">
                <Input
                  required={true}
                  name="lostSince"
                  label={t('translation.lostSince')}
                  type="date"
                  value={values.lostSince}
                  onChange={handleInputChange}
                  InputLabelProps={{ shrink: true }}
                  error={errors.lostSince}
                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4 p-2 mb-6 md:mb-0">
                <Input
                  required={true}
                  name="lastPlaceSeen"
                  label={t('translation.lastPlaceSeen')}
                  type="text"
                  value={values.lastPlaceSeen}
                  onChange={handleInputChange}
                  error={errors.lastPlaceSeen}
                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4  p-2 mb-6 md:mb-0">
                <Input
                  required={false}
                  name="lastUpdate"
                  label={t('translation.lastUpdate')}
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
                  label={t('translation.age')}
                  type="number"
                  value={values.age}
                  onChange={handleInputChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4  p-2 mb-6 md:mb-0">
                <Select
                  name="gender"
                  label={t('translation.gender')}
                  value={values.gender}
                  onChange={handleInputChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4  p-2 mb-6 md:mb-0">
                <Input
                  required={true}
                  name="relationship"
                  label={t('translation.relationship')}
                  type="text"
                  value={values.relationship}
                  onChange={handleInputChange}
                  error={errors.relationship}
                />
              </div>
              <div className="w-full md:w-2/4 lg:w-1/4  p-2 mb-6 md:mb-0">
                <Input
                  required={false}
                  name="job"
                  label={t('translation.job')}
                  type="text"
                  value={values.job}
                  onChange={handleInputChange}
                  error={errors.job}
                />
              </div>
            </div>
            {/* textarea :Notes , Special Situotion  */}
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-2/4 p-2 mb-6 md:mb-0">
                <Textarea
                  name="notes"
                  label={t('translation.notes')}
                  value={values.notes}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full md:w-2/4 p-2 mb-6 md:mb-0">
                <Textarea
                  name="specialSituotion"
                  label={t('translation.specialSituation')}
                  value={values.specialSituotion}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* Button  */}
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0 text-left">
                <p className="text-sm ">
                  {' '}
                  <span className="text-red-500">*</span> {t('translation.markedFieldsAreRequired')}
                </p>
              </div>
              <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0 md:justify-end justify-center flex ">
                <Button
                  onClickMethod={resetForm}
                  buttonName={t('translation.cancel')}
                  icon={cancel}
                  type="reset"
                  nameClass="rounded-full w-32 h-10 bg-white text-gray-700  border border-gray-700 border-solid"
                />
                <Button
                  buttonName={t('translation.save')}
                  icon={save}
                  type="submit"
                  nameClass="rounded-full w-32 h-10 bg-gradient-to-r from-blue-400 to-blue-700 text-white "
                />
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

const Icon = (props) => {
  return (
    <img
      src={props.srcName}
      alt={props.srcAlt}
      className="icon inline mr-5 md:mr-5 hover:opacity-75 "
    />
  );
};
const Title = (props) => {
  return (
    <h1 className="md:text-2xl lg:font-medium inline text-base">
      {props.title}
    </h1>
  );
};

export default MissingPersonForm;
