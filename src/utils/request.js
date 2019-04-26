import axios from 'axios'

const fetch = (options) => {
    let {
        method = 'get',
        data,
        url,
        ...config
    } = options;

    for (let key in data) {
        if (data[key] === undefined || data[key] === null) {
            delete data[key];
        }
    }

    //通用请求参数可在此修改

    switch (method.toLowerCase()) {
        case 'get':
            return axios.get(url, {
                params: data,
                ...config
            });
        case 'delete':
            return axios.delete(url, {
                data: data,
                headers: config.headers
            }, config);
        case 'post':
            return axios.post(url, data, config);
        case 'put':
            return axios.put(url, data, config);
        case 'patch':
            return axios.patch(url, data, config);
        default:
            return axios(options);
    }
}
export default function request(options) {
    return fetch(options).then((response) => {
        const { statusText, status, } = response
        let data = response.data;


        if (!data) {
            throw { message: '系统/网络异常，请稍后重试' };
        }
        if (data.code !== 200) {
            throw { ...data };
        }

        return {
            success: true,
            message: statusText,
            statusCode: status,
            ...data,
        }

    }).catch((error) => {
        console.error(error);

        return Promise.reject(error);

    })
}