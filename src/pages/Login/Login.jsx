import { Formik } from 'formik';
import { toast } from 'react-toastify';

import { AppButton, AppField, AppModal } from '../../components';
import { useUserContext } from '../../contexts/userContext';
import { useLoginMutation } from '../../services/auth-api';
import { getErrorText } from '../../utils';

export const Login = () => {
  const [setLogin, { data, isLoading, error }] = useLoginMutation();

  const { logIn } = useUserContext();

  const formValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (values) => {
    const resp = await setLogin(values);
    if (!resp?.error) {
      toast.success('Login success!');
      logIn();
    } else {
      toast.error(getErrorText(resp?.error));
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
      <h1>Login</h1>
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
              label='Password'
              value={values.password}
              onInputChange={handleChange}
              name='password'
              type='password'
            />
            <AppButton type='submit' tittle={isSubmitting ? 'Loading...' : 'Go ahead!'} />
          </form>
        )}
      </Formik>
    </div>
  );
};
