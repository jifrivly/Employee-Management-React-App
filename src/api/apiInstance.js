/**
 * Contains API class to setup new axios instance
 */
import axios from 'axios';

import { ROUTES } from '../Routes.constants';

import { KEYS } from '../dataKeys';
import { CONFIG } from '../config';

const CancelToken = axios.CancelToken;

/**
 * API class to create axios instnces with passed base URL.
 */
export class APIInstance {
    constructor(options) {
        this.baseURL = options.baseURL;
        this.api = this.axiosInstance();
        this.pending = {};
        this.CancelToken = axios.CancelToken;
        this.setCancelPendingInterceptor(this.api);
    }

    /**
     * Create axios instance with user timezone and passed base URL
     */
    axiosInstance() {
        this.api = axios.create({
            baseURL: CONFIG.API_VERSION + this.baseURL,
        });
        return this.api;
    }

    // update pending requests (add || delete, cancel)
    updatePending(config, cancel) {
        let url = '';
        if (config && config.url) {
            url = `${config.baseURL}${config.url}`;
        }
        // Return in case method does not exists
        if (!config || !config.method) {
            return;
        }

        let flagUrl = '';
        if (config.method) {
            flagUrl = url + '&' + config.method;
        }
        if (config.params) {
            flagUrl += '&' + JSON.stringify(config.params);
        }
        if (cancel) {
            this.pending[flagUrl] = cancel;
        } else {
            delete this.pending[flagUrl];
        }
    }

    // set cancel pending interceptor for all requests
    // eslint-disable-next-line weavers-react/react_maxlines_per_function
    setCancelPendingInterceptor(instance) {
        if (!instance) {
            instance = this.axiosInstance();
        }
        instance.interceptors.request.use((config) => {
            // eslint-disable-next-line no-console
            console.log('config', config);
            if (config.noCancel) {
                return config;
            }
            const token = localStorage.getItem(KEYS.ACCESS_TOKEN);
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }

            config.cancelToken = new CancelToken((cancel) => {
                this.updatePending(config, cancel);
            });
            return config;
        });

        instance.interceptors.response.use(
            (response) => {
                this.updatePending(response.config);
                return response;
            },
            (error) => {
                const { response } = error;
                if (response && response.status === 401) {
                    localStorage.clear();
                    window.location = ROUTES.LOGIN;
                }
                this.updatePending(error.config);
                return Promise.reject(error);
            }
        );
        return instance;
    }

    // cancel all pending requests
    cancelPending() {
        Object.keys(this.pending).forEach((e) => {
            if (this.pending[e]) {
                this.pending[e]();
                delete this.pending[e];
            }
        });
    }
}