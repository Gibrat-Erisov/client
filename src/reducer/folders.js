let initialState = {
    compID: '5da9d3b6b2c6ee3e38937ea6',
    folders: [],
    Indicator: [],
    nameComp: 'Компания',
}

const folders = (state = initialState, aciton) => {

    switch(aciton.type) {
        
        case "SET_FOLDER":
            return{
                ...state,
                folders: [ ...aciton.folders]
            }
        
        case "SET_INDICATOR":
                return{
                    ...state,
                    Indicator: [ ...aciton.indicator]
                }

        default:
            return state
    }
}

export default folders;