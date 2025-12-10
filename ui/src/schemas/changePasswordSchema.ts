import * as yup from 'yup';

export const changePasswordSchema = yup.object({
    current_password: yup.string()
        .required("Current password is required"),
    new_password: yup.string()
        .required("New password is required")
        .min(8, "Password must be at least 8 characters"),
    confirm_password: yup.string()
        .required("Confirm password is required")
        .oneOf([yup.ref("new_password")], "Passwords do not match"),
})

export type ChangePsswordFormData = yup.InferType<typeof changePasswordSchema>;