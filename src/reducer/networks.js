let initialState = {
    networks: [],
    errorName: '',
    errorUser: '',
    errorPassword:'',
    errorServer:'',
    errorPort:'',
    errorDatabase:''
}

const networks = (state = initialState, aciton) => {
    switch(aciton.type) {
        case 'SET_NETWORK':
            return{
                ...state,
                networks: [...aciton.networks]
            }

        default:
            return state
    }
}

export default networks;