import axios from 'axios';
import { API_URI } from './constants';
export const API_TIMEOUT = 30000;
const instance = axios.create({
  baseURL: API_URI,
  timeout: API_TIMEOUT,
});

const post = ({ url, params, data }: any) => instance({
  url,
  params,
  data,
  method: 'POST',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})
const put = ({ url, params, data }: any) => instance({
  url,
  params,
  data,
  method: 'PUT',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})
const deleteI = ({ url, params, data }: any) => instance({
  url,
  params,
  data,
  method: 'DELETE',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

const get = ({ url, params, data }: any) => instance({
  url,
  params,
  data,
  method: 'GET',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

const ApiList = {
  cars: '/cars',
  user: '/users',
}

export const addCar = (scan: any) => {
  return post({
    url: ApiList.cars,
    data: scan
  });
};
export const putCar = (car: any) => {
  return put({
    url: ApiList.cars,
    data: car
  });
};
export const deleteCar = (id: string) => {
  return deleteI({
    url: `${ApiList.cars}/${id}`,
  });
};
export const getCars = (query: any) => {
  return get({
    url: ApiList.cars,
    params: query
  });
};
export const getCarId = (id: string) => {
  return get({
    url: `${ApiList.cars}/${id}`,
  });
};
export const getUsers = (query: any) => {
  return get({
    url: ApiList.user,
    params: query
  });
};

export const getUserId = (id: string) => {
  return get({
    url: `${ApiList.user}/${id}`,
  });
};
export const addUser = (scan: any) => {
  return post({
    url: ApiList.user,
    data: scan
  });
};
export const putUser = (car: any) => {
  return put({
    url: ApiList.user,
    data: car
  });
};
export const deleteUser = (id: string) => {
  return deleteI({
    url: `${ApiList.user}/${id}`,
  });
};

