import React from 'react';
import Input from './Input';
//Importing the functions created for Contact Us form
import { useForm, Form } from './useForm';
//importing the Msg icon as a recat component
import { ReactComponent as Msgicon } from '../../images/msg.svg';
//Importing the firebase setup to be used on submit event
import firebase from '../../firebase';

import {useTranslation} from "react-i18next";


//Intaial values of the form
const initialFValues = {
  name: '',
  email: '',
  subject: '',
  msg: '',
};

//This function is used to call and group all function and Material UI components
//It also handles submit, and validation events

export default function ContactUsForm() {
  //Validation function that send Error msg based on the entered data
  //It varifies that all required field were enterd and email was enetred correctly

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('name' in fieldValues)
      temp.name = fieldValues.name ? '' : 'This field is required.';
    if ('subject' in fieldValues)
      temp.subject = fieldValues.subject ? '' : 'This field is required.';
    if ('msg' in fieldValues)
      temp.msg = fieldValues.msg ? '' : 'This field is required.';

    if ('email' in fieldValues)
      temp.email =
        /$^|.+@.+..+/.test(fieldValues.email) && fieldValues.email
          ? ''
          : 'Email is not valid.';
    setErrors({
      ...temp,
    });
    //This condidtion is used to verifiy that no errors are still in the form
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === '');
  };
  //Assiging the return values to a const variables and obj
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues, true, validate);

  //This function handles the form submission
  //Start by validating user input
  //If no errors, Data will be esnd to firebase under "ContactUs" collection
  //Then it resets all the field to its intail vales
  //LAstly, Acknowledge that data was sent successfly
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      //console.log(values);
      firebase
        .firestore()
        .collection('ContactUs')
        .add(values)
        .then(() => {
          setValues(initialFValues);
          alert('Your Mesaage was sent successfully.');
        });
      resetForm();
    }
  };

  const [t, i18n] = useTranslation('common');

  //In this return form, Material Textfield which was defined will be used and assigned probs
  return (
    <Form onSubmit={handleSubmit}>
      <div className="flex flex-col w-full space-y-4 ">
        <Input
          name="name"
          label={t('translation.fullName')}
          value={values.name}
          onChange={handleInputChange}
          error={errors.name}
          multi={false}
        />
        <Input
          label={t('translation.email')}
          name="email"
          value={values.email}
          onChange={handleInputChange}
          error={errors.email}
          multi={false}
        />
        <Input
          name="subject"
          label={t('translation.subject')}
          value={values.subject}
          onChange={handleInputChange}
          error={errors.subject}
          multi={false}
        />
        <Input
          name="msg"
          label={t('translation.message')}
          value={values.msg}
          onChange={handleInputChange}
          error={errors.msg}
          multi={true}
        />

        <div className=" place-self-center sm:place-self-center xl:w-auto lg:w-auto  w-2/4 xl:self-start  lg:self-start lg:w-auto sm:w-2/5   sm:self-center self-center sm:pt-2 sm:pb-2 pt-2 pb-2">
          <button className=" text-center h-8 items-center items-center  flex sm:p-1 flex-row-reverse inline-flex xl:w-auto w-full  lg:w-auto py-1 rounded-full text-white bg-gradient-to-r from-teal-200 via-blue-500 to-blue-700  focus:outline-none">
            <Msgicon className="p-1" />
            <span
              style={{ textAlign: 'center' }}
              className="p-5 text-center  sm:text-center sm:text-sm text-xs  "
            >
            {t('translation.send')}
            </span>
          </button>
        </div>
      </div>
    </Form>
  );
}
