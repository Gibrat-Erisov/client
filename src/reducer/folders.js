let initialState = {
    compID: '5da9d3b6b2c6ee3e38937ea6',
    folders: [],
    Indicator: [],
    folderID:'',
    showFoldeCreateBox: false,
    showIndicCreateBox: false,
    folderName: '',
    indicatorName: '',
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
        
        case "SHOW_FOLDER_CREATOR":
                let stateCopy = {...state}
                let showFolder = stateCopy.showFoldeCreateBox
                stateCopy.showFoldeCreateBox = !showFolder
                stateCopy.folderID = aciton.idFolder
                return stateCopy
                
        case "UPDATE_NAME_FOLDER":
                
                    return{
                        ...state,
                        folderName: aciton.name
                    }

        default:
            return state
    }
}

export default folders;