import request from "./interceptor";

export const getRequest = async (url: string, headers?: any, params?: any): Promise<any> => {
  const res = await request.get(url, { ...headers, params });
  return res;
};

export const postRequest = async (url: string, payload?: any, headers?: any, params?: any): Promise<any> => {
  const res = await request.post(url, payload, { headers, params });
  return res;
};

export const putRequest = async (url: string, payload?: any, headers?: any, params?: any): Promise<any> => {
  const res = await request.put(url, payload, { headers, params });
  return res;
};

export const deleteRequest = async (url: string, headers?: any, params?: any): Promise<any> => {
  const res = await request.delete(url, { headers, params });
  return res;
};

export const patchRequest = async (url: string, payload?: any, headers?: any, params?: any): Promise<any> => {
  const res = await request.patch(url, payload, { headers, params });
  return res;
};
