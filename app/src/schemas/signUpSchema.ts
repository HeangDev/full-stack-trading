import * as yup from 'yup';
import type { TFunction } from 'i18next';

export const signUpSchema = (t: TFunction) => yup.object({
    phone: yup.string().required("Phone number is required").matches(/^[0-9]{7,15}$/, "Phone number is not valid"),
    username: yup.string().required(t("signup_validation.username_required")),
    password: yup.string().required(t("signup_validation.password_required")),
    confirm_password: yup
        .string()
        .oneOf([yup.ref('password')], t("signup_validation.confirm_password_oneOf"))
        .required(t("signup_validation.confirm_password_required")),
    withdraw_code: yup.string().required(t("signup_validation.withdraw_code_required")),
    referral_code: yup.string().required()
})

export type SignUpFormData = yup.InferType<ReturnType<typeof signUpSchema>>;