import * as yup from 'yup';

export const changePasswordSchema = yup.object({
    current_password: yup.string()
        .required("Current password is required"),
    new_password: yup.string()
        .required("New password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Must include at least one uppercase letter")
        .matches(/[a-z]/, "Must include at least one lowercase letter")
        .matches(/[0-9]/, "Must include at least one number")
        .matches(/[@$!%*?&]/, "Must include at least one special character"),
    confirm_password: yup.string()
        .required("Confirm password is required")
        .oneOf([yup.ref("new_password")], "Passwords do not match"),
})

export type ChangePsswordFormData = yup.InferType<typeof changePasswordSchema>;