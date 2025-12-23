import * as yup from 'yup';
import type { TFunction } from 'i18next';

export const loginSchema = (t: TFunction) => yup.object({
    username: yup.string().required(t("login_validation.username_required")),
    password: yup.string().required(t("login_validation.password_required"))
})

export type LoginFormData = yup.InferType<ReturnType<typeof loginSchema>>;