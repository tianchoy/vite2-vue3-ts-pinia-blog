import axios from 'axios'

let instance = axios.create({
    baseURL: '/api/',
    timeout: 3000,
})

const errorHandle = (state: number, info: string) => {
    switch (state) {
        case 403:
            console.log('服务器拒绝访问');
            break;
        case 500:
            console.log('服务器无响应');
            break;
        default:
            console.log(info);
            break;
    }
}

//请求拦截器
instance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

//响应拦截器
instance.interceptors.response.use(
    res => {
        return res.status === 200 ? Promise.resolve(res) : Promise.reject(res)
    },
    error => {
        const { response } = error
        errorHandle(response.status, response.info)
    }
)

export default instance
