import * as yup from 'yup';
import type { TFunction } from 'i18next';

export const bankSchema = (t: TFunction) => yup.object({
    bank_name: yup.string()
        .required(t("bank_validation.bank_name_required")),
    bank_account: yup.string()
        .required(t("bank_validation.bank_account_required")),
})

export type BankFormData = yup.InferType<ReturnType<typeof bankSchema>>;