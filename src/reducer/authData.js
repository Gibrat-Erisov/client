let initialState = {
    userID: '',
    email: '',
    password: '',
    idCompany: '',
    tokenOperator: '',
    position: '',
    isAuthOperator: false,
    isButtonClicked: false,
    loadingAuth: '',
    ErrorEmail: '',
    ErrorPassword: '',
    ErrorAuth: ''

    
}

const authData = (state = initialState, aciton) => {
    
    switch(aciton.type) {
        // _____________________ Работа с ошибками _________________
        //  Обновление логина 
        case 'UPDATE_TEXT_LOGIN':
                
            return{
                ...state,
                email: aciton.login
            }
        //  Обновление пароля 
        case 'UPDATE_TEXT_PASSWORD':
                
                return{
                    ...state,
                    password: aciton.Password
                }
        //  Обновление ошибки логина 
        case 'UPDATE_ERROR_LOGIN':
            
                return{
                    ...state,
                    ErrorEmail: aciton.ErrorLogin
                }
        //  Обновление ошибки пароля 
        case 'UPDATE_ERROR_PASSWORD':
                return{
                    ...state,
                    ErrorPassword: aciton.ErrorPassword
                }
        //  Обновление ошибки авторизации 
        case 'UPDATAE_ERROR_AUTH':
            return{
                ...state,
                ErrorAuth: aciton.text
            }


        // _____________________ Работа с авторизацией _________________
        //  Оператор авторизировался 
        case 'SET_AUTH_OPERATOR':
            return{
                ...state,
                isAuthOperator: true
            }

        //  Установить токен оператора при авторизации 
        case 'UPDATA_TOKE_OPERATOR':
            return{
                ...state,
                tokenOperator: aciton.token
            }
        case 'SET_ID_COMPANY':
            return{
                ...state,
                idCompany: aciton.id
            }
        case 'SET_ID_OPERATOR':
            return{
                ...state,
                userID: aciton.id
            }
        case 'SET_BUTTON_CLICKED_TRUE':
            
            return{
                ...state,
                isButtonClicked: true
            }
        case 'SET_BUTTON_CLICKED_FALSE':
            return{
                ...state,
                isButtonClicked: false
            }
        case "SET_OPERATOR_POSITION":
            
            return{
                ...state,
                position: aciton.position
            } 
        
        //___________________ LOGOUT _______________________
        case 'CLEAR_USER_ID':
            return{
                ...state,
                userID: ''
            }
        case 'CLEAR_COMPANY_ID':
            return{
                ...state,
                idCompany: ''
            }
        case 'OPERATOR_LOG_OUT':
            return{
                ...state,
                isAuthOperator: false
            }
        default:
            return state
    }
}

export default authData;