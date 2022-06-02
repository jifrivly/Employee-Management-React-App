import * as yup from 'yup';

export const FORM_FIELDS = {
    email: yup.object().shape({ email: yup.string().email() }),
    password: yup.object().shape({ password: yup.string().required() })
};