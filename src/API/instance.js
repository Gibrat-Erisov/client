import * as axios from 'axios'

const instance = axios.create({
    
    baseURL: "http://localhost:5500/",
    headers: {
        "tokenOperator": sessionStorage.getItem('tokenOperator'),
        "tokenAdmin" : sessionStorage.getItem('tokenAdmin')
        
    }
})

instance.interceptors.request.use(function (config) {
    const tokenOperator = sessionStorage.getItem('tokenOperator');
    config.headers.tokenOperator =  tokenOperator ;
    return config;
  });


export default instance