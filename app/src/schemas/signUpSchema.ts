import * as yup from 'yup';
import type { TFunction } from 'i18next';

export const signUpSchema = (t: TFunction) => yup.object({
    country_code: yup.string().required(),
    phone_number: yup.string().required(t("signup_validation.phone_number_required")).matches(/^[0-9]{7,15}$/, t("signup_validation.phone_number_matches")),
    username: yup.string().required(t("signup_validation.username_required")),
    password: yup.string().required(t("signup_validation.password_required")),
    referral_code: yup.string().required()
})

export type SignUpFormData = yup.InferType<ReturnType<typeof signUpSchema>>;