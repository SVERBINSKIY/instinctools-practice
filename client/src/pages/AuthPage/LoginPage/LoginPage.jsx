import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { loginFormValidationSchema } from '../../../validationSchemas';
import {
  ButtonForForm,
  FormErrorForRegister,
  Input,
  LabelForInput,
  LoginRegisterForm,
} from '../../../styles/styledComponents';

const LoginPage = (props) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validateOnBlur
      onSubmit={(values) => {
        props.signinClick(values);
      }}
      validationSchema={loginFormValidationSchema}
    >
      {({ values, errors, touched, dirty, handleSubmit, handleChange, handleBlur, isValid }) => (
        <LoginRegisterForm>
          <LabelForInput>Email</LabelForInput>
          <Input
            width={`100%`}
            height={`40px`}
            margin
            border={`1px solid #eee`}
            name={`email`}
            type={`email`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={touched.email && errors.email ? 'error' : ''}
          />
          {touched.email && errors.email && (
            <FormErrorForRegister>{errors.email}</FormErrorForRegister>
          )}
          <LabelForInput>Password</LabelForInput>
          <Input
            width={`100%`}
            height={`40px`}
            margin
            border={`1px solid #eee`}
            name={`password`}
            type={`password`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && errors.password ? 'error' : ''}
          />
          {touched.password && errors.password && (
            <FormErrorForRegister>{errors.password}</FormErrorForRegister>
          )}
          <ButtonForForm
            width={`100%`}
            height={`40px`}
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
            type={'submit'}
          >
            Login
          </ButtonForForm>
        </LoginRegisterForm>
      )}
    </Formik>
  );
};
LoginPage.propTypes = {
  app: PropTypes.object.isRequired,
  signinClick: PropTypes.func.isRequired,
};

export default LoginPage;
