import { KEYS } from '../dataKeys';

export const CommonUtils = {
    isLoggedIn: () => {
        return localStorage.getItem(KEYS.ACCESS_TOKEN) ? true : false;
    }
};