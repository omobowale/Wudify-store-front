import axiosInstance from "../utils/axiosInstance";


export const verifyPayment = async (data) => {
    return axiosInstance(`/payments/verify-payment`, "POST", data).then(response => {
        return response;
    })
}