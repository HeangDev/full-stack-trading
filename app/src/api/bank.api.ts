import api from "./axios";

export const createBank = (data: {
    account_holder_name: string,
    bank_account: number,
    bank_name: string,
    account_type: string
}) => api.post("/bank", data);