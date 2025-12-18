import * as yup from 'yup';
import type { TFunction } from 'i18next';

export const changePasswordSchema = (t: TFunction) => yup.object({
    current_password: yup.string()
        .required(t("changePassword_validation.current_password_required")),
    new_password: yup.string()
        .required(t("changePassword_validation.new_password_required"))
        .min(8, t("changePassword_validation.new_password_min")),
    confirm_password: yup.string()
        .required(t("changePassword_validation.confirm_password_required"))
        .oneOf([yup.ref("new_password")], t("changePassword_validation.confirm_password_oneOf")),
})

export type ChangePsswordFormData = yup.InferType<ReturnType<typeof changePasswordSchema>>;