import instance from './instance'

export const authAPI = {
    getOperator(email,password){
        return instance.put('operator', { email, password })
                        .then(response => {     
                            sessionStorage.setItem('tokenOperator', response.data.tokenOperator);
                            return response
                            })    
                        
    }
}