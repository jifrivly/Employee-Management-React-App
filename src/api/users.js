import { APIInstance } from './apiInstance';

export const instance = new APIInstance({
    baseURL: '/users',
});

const api = instance.api;

export const users = (payload) => {
    return api.get(null);
};
