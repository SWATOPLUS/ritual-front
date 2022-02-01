import axios from "./index";

export const loginReq = (data: any) => axios.post('users/login/', data);
export const registerReq = (data: any) => axios.post( "users/register/", data );
export const refreshReq = () => axios.post("token/refresh/");
export const logoutReq = (refresh: string) => axios.post('users/logout/', {refresh});
export const restorePassReq = (data: RestorePassRequest) => axios.post('user/change_pwd', {user: data})

export const verifyEmailReq = (hash: any) => axios.post('verify_email/', { hash }, );

export const getVk = () => axios.get('oauth/vk/')
export const entryVkReq = (code: any) => axios.post('oauth/vk/', { code })
export const getGoogle = () => axios.get('oauth/google/')
export const entryGoogleReq = (code: any) => axios.post('oauth/google/', { code })

interface RestorePassRequest {
    id: number;
    code: string;
    new_password: string;
}