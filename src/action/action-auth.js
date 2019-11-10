import {authAPI} from '../API/authAPI'
 
export const updateTextLogin = (login) => ({type: 'UPDATE_TEXT_LOGIN', login})
export const updateTextPassword = (Password) => ({type: 'UPDATE_TEXT_PASSWORD', Password})


export const updateErrorLogin = (text) => ({type: 'UPDATE_ERROR_LOGIN', ErrorLogin:text})
export const updateErrorPassword = (text) => ({type: 'UPDATE_ERROR_PASSWORD', ErrorPassword:text})

const updataTokeOperator = (token) => ({type:'UPDATA_TOKE_OPERATOR', token})
const operatorLogIn = () => ({type:'SET_AUTH_OPERATOR'})
export const updateErrorAuth = (text) => ({type:'UPDATAE_ERROR_AUTH', text})
const setIdCompany = (id) => ({type: 'SET_ID_COMPANY', id})
const setIdOperator = (id) => ({type: 'SET_ID_OPERATOR', id})
export const setButtonClickedTrue = () => ({type:'SET_BUTTON_CLICKED_TRUE'})
export const setButtonClickedFalse = () => ({type:'SET_BUTTON_CLICKED_FALSE'})

export const gatOperator = (email,password) => {
    return(dispatch) => {
        authAPI.getOperator(email,password)
            .then(dataAll => {
               
                dispatch(updataTokeOperator(dataAll.data.tokenOperator))
                dispatch(setIdCompany(dataAll.data.user.idCompany))
                dispatch(setIdOperator(dataAll.data.user._id))
                dispatch(operatorLogIn())
                dispatch(updateErrorAuth(''))
                
                } )
            .catch(err => {
                        if(err.response.status === 401) {
                            dispatch(updateErrorAuth('Не верный логин или пароль'))
                            dispatch(setButtonClickedFalse())}
                        }
                        
                    )
    }
}


const cleatUserID = () => ({type: 'CLEAR_USER_ID'})
const cleatCompanyID = () => ({type: 'CLEAR_COMPANY_ID'})
const OperatorLogOut = () => ({type: 'OPERATOR_LOG_OUT'})

export const logOut = () => {
    return(dispatch) => {
        dispatch(OperatorLogOut())
        dispatch(cleatUserID())
        dispatch(cleatCompanyID())
        dispatch(setButtonClickedFalse())
    }
}