import * as yup from 'yup';
import type { TFunction } from 'i18next';

export const loginSchema = (t: TFunction) => yup.object({
    country_code: yup.string().required(),
    phone: yup.string().required(t("login_validation.phone_number_required")).matches(/^[0-9]{7,15}$/, t("login_validation.phone_number_matches")),
    password: yup.string().required(t("login_validation.password_required"))
})

export type LoginFormData = yup.InferType<ReturnType<typeof loginSchema>>;