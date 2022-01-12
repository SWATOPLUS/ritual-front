import axios from './index'

export const createPageReq = (data: any) => axios.post( 'page/', data );
export const updatePageReq = (data: any) => axios.patch( 'page/', data );
export const getPageReq = (data: any) => axios.get('page/', { params: data });
export const getPagesReq = (headers: any) => axios.get('user/pages/', {headers});
export const getNationalyReq = () => axios.get('nationalities/')
export const deletePage = (page: any) => axios.delete('page/', { params: { page }}); 

export const addImageReq = (data: FileList) => {
    const formData = new FormData()
    for (let i = 0; i < data.length; i++) {
        formData.append(i.toString(), data[i]);
    }
    return axios.post('files/', formData)
}