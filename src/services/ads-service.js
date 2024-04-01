import axiosInstance from "../utils/axiosInstance";


export const getAds = async (data) => {
    return axiosInstance(`/ads`, "GET", data).then(response => {
        return response;
    })
}