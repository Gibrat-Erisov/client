import {networkAPI} from '../API/networkAPI'

const setNetwork = (networks) => ({type: 'SET_NETWORK',networks})


export const getNetworks = (idCompany) => {
    return(dispatch) => {
        networkAPI.getNetwork(idCompany)
            .then(networks => 
                {   
                    dispatch(setNetwork(networks.data))})
    }
}