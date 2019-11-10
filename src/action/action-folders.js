import {chartAPI} from '../API/chartAPI'


const setFolder = (folders) =>({type: 'SET_FOLDER', folders })
const setIndicator = (indicator) => ({type: 'SET_INDICATOR',indicator})

export const getFolders = (idCompany) => {
    return(dispatch) => {
        chartAPI.getFolder(idCompany)
            .then(folders => {dispatch(setFolder(folders))})
    }
}

export const getIndicators = (idCompany) => {
    return(dispatch) => {
        chartAPI.getIndicator(idCompany)
            .then(indicator => {dispatch(setIndicator(indicator))})
    }
}