import { Formik } from 'formik';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AppButton, AppField, AppModal } from '../../components';
import { PATHS } from '../../constants';
import { useUserContext } from '../../contexts/userContext';
import { useCreateUserMutation } from '../../services/auth-api';
import { getErrorText } from '../../utils';
import { registrationSchema } from './registrationSchema';

export const Registration = () => {
  const [createUser, { error }] = useCreateUserMutation();

  const navigate = useNavigate();

  const formValues = {
    email: '',
    first_name: '',
    last_name: '',
    password: '',
  };

  const onSubmit = async (values) => {
    const resp = await createUser(values);
    if (!resp?.error) {
      toast.success('Account created successful!');
      navigate(PATHS.login, { replace: true });
    }
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
      <Formik
        validationSchema={registrationSchema}
        initialValues={formValues}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values, isSubmitting, errors }) => (
          <form autoComplete='none' onSubmit={handleSubmit}>
            <AppField
              label='Email'
              errorMessage={errors?.email}
              value={values.email}
              onInputChange={handleChange}
              name='email'
            />
            <AppField
              label='First name'
              errorMessage={errors?.first_name}
              value={values.login}
              onInputChange={handleChange}
              name='first_name'
            />
            <AppField
              label='Last name'
              value={values.last_name}
              errorMessage={errors?.last_name}
              onInputChange={handleChange}
              name='last_name'
            />
            <AppField
              label='Password'
              value={values.password}
              errorMessage={errors?.password}
              onInputChange={handleChange}
              name='password'
              type='password'
            />
            <div>
              <p>
                Already have account? Go to <Link to={PATHS.login}>Login</Link>
              </p>
            </div>
            <AppButton
              type='submit'
              tittle={isSubmitting ? 'Loading...' : 'Registartion'}
            />
          </form>
        )}
      </Formik>
      {error ? <p className='text-danger'>{getErrorText(error) + '!'}</p> : null}
      <Outlet />
    </div>
  );
};
