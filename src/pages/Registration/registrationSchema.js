import { object, string } from 'yup';

import { messages } from '../../constants';

export const registrationSchema = object({
  email: string().required('Email very important').email(messages.REQUIRED_FIELD),
  first_name: string().required('Please say your name!'),
  last_name: string(),
  password: string().min(4, 'Min 4 symbols!').required(messages.REQUIRED_FIELD),
});
