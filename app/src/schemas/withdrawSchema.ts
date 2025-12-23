import * as yup from 'yup';
import type { TFunction } from 'i18next';

export const withdrawSchema = (t: TFunction) => yup.object({
    balance: yup.number().required(),
    amount: yup.string().required(t("withdarw_validation.withdarw_amount_required")),
    code: yup.string().required(t("withdarw_validation.withdarw_code_required")),
    fee: yup.number().required(),
    reason: yup.string().required(),
})

export type WithdrawFormData = yup.InferType<ReturnType<typeof withdrawSchema>>;