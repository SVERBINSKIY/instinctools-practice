import React from 'react'
import {
  SearchForm,
  Input,
  ButtonForForm,
  FormError,
} from '../../styles/styledComponents'
import { Formik } from 'formik'
import { searchFormValidationSchema } from '../../validationSchemas'

const FormMainPage = (props) => {
  const date = {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  }
  return (
    <Formik
      initialValues={{
        where: '',
        dateIn: `${date.year}-${date.month}-${date.day}`,
        dateOut: `${date.year}-${date.month}-${date.day + 1}`,
        rooms: 1,
        adults: 1,
        children: 0,
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values)
      }}
      validationSchema={searchFormValidationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <SearchForm>
          <Input
            width={`350px`}
            placeholder={`Where are you going?`}
            name={`where`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.where}
            error={touched.where && errors.where ? 'error' : ''}
          />
          {touched.where && errors.where && (
            <FormError>{errors.where}</FormError>
          )}
          <Input
            width='125px'
            type='date'
            name={`dateIn`}
            min={`${date.year}-${date.month}-${date.day}`}
            max={`${date.year + 1}-${date.month}-${date.day}`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.dateIn}
            error={touched.dateIn && errors.dateIn ? 'error' : ''}
          />
          {touched.dateIn && errors.dateIn && (
            <FormError>{errors.dateIn}</FormError>
          )}
          <Input
            width='125px'
            type='date'
            name={`dateOut`}
            min={`${date.year}-${date.month}-${date.day + 1}`}
            max={`${date.year + 1}-${date.month}-${date.day + 1}`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.dateOut}
            error={touched.dateOut && errors.dateOut ? 'error' : ''}
          />
          {touched.dateIn && errors.dateIn && (
            <FormError>{errors.dateOut}</FormError>
          )}
          <Input
            width='113px'
            type='number'
            placeholder='Rooms'
            min={`1`}
            max={`3`}
            name={`rooms`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.rooms}
            error={touched.rooms && errors.rooms ? 'error' : ''}
          />
          {touched.rooms && errors.rooms && (
            <FormError>{errors.dateIn}</FormError>
          )}
          <Input
            width='113px'
            type='number'
            placeholder='Adults'
            min={`1`}
            max={`3`}
            name={`adults`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.adults}
            error={touched.adults && errors.adults ? 'error' : ''}
          />
          {touched.adults && errors.adults && (
            <FormError>{errors.dateIn}</FormError>
          )}
          <Input
            width='113px'
            type='number'
            placeholder='Children'
            min={`0`}
            max={`3`}
            name={`children`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.children}
            error={touched.adults && errors.adults ? 'error' : ''}
          />
          <ButtonForForm
            width='120px'
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
            type={'submit'}
          >
            Search
          </ButtonForForm>
        </SearchForm>
      )}
    </Formik>
  )
}

export default FormMainPage