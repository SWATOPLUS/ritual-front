import axios from "./index";

export const userEditReq = (data: any) => axios.patch('user/', data);
export const editPasswordReq = (data: any) => axios.post('user/change_pwd/', data)
export const editEmailReq = (data: any) => axios.post('user/change_mail/', data)
export const getUserReq = (headers: any) => axios.get('user/', {headers});