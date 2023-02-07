import { Formik } from 'formik';
import Rect, { Component, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AppButton, AppField, AppModal } from '../../components';
import { useUserContext } from '../../contexts/userContext';

export const Registration = () => {
  const [isModalShow, setIsModalShow] = useState();

  const { logIn } = useUserContext();

  const formValues = {
    email: '',
    login: '',
    password: '',
    modalInputValue: '',
  };

  const onSubmit = async (event) => {
    await logIn();
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <h1>Create account</h1>
      <Formik initialValues={formValues} onSubmit={onSubmit}>
        {({ handleSubmit, handleChange, values, isSubmitting }) => (
          <form autoComplete='none' onSubmit={handleSubmit}>
            <AppField
              label='Email'
              value={values.email}
              onInputChange={handleChange}
              name='email'
            />
            <AppField
              label='Login'
              value={values.login}
              onInputChange={handleChange}
              name='login'
            />
            <AppField
              label='Password'
              value={values.password}
              onInputChange={handleChange}
              name='password'
              type='password'
            />
            <AppButton
              type='submit'
              tittle={isSubmitting ? 'Loading...' : 'Registartion'}
            />
          </form>
        )}
      </Formik>
      {/* {isModalShow ? (
        <AppModal
          isShow={isModalShow}
          inputValue={formValues.modalInputValue}
          onInputChange={handleChange}
          onHide={setModalHide}
        />
      ) : null} */}
      <Outlet />
    </div>
  );
};
