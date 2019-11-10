import instance from './instance'

export const networkAPI = {

    getNetwork(idCompany){
        return instance.get(`network/${idCompany}`)
            .then(respnonse => respnonse)
    }

}