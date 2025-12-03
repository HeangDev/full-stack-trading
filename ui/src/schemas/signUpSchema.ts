import * as yup from 'yup';


export const signUpSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required")
})

export type SignUpFormData = yup.InferType<typeof signUpSchema>;