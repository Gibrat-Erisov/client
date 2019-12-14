import React from 'react';
import { MDBTreeviewList, MDBTreeviewItem } from 'mdbreact';
import s from './style.module.css'
import Indic from './contextMenu'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const ShowTree = ({folders,compID,indicators,openFolderCreatorBox}) => {

    return folders.map( folder => {

        if(folder.idMainFolder === compID)

        return(
            <MDBTreeviewList key={folder._id} title={folder.name}  far open>
                
               { indicators.map( (ind, index) => { if(ind.idMainFolder === folder._id) {
                       return   <Indic  id={index} 
                                        icon='check-circle' 
                                        title={ind.name} 
                                        key={index} />
                                    
                   }
               })}

               {folders.find( x => x.idMainFolder  ===  folder._id) &&
                        <>
                        <ContextMenuTrigger id={folder._id}>
                            <ShowTree className="well" compID={folder._id} folders={folders} indicators = {indicators}/>
                        </ContextMenuTrigger>

                        <ContextMenu className={s.front} id={folder._id}>
                            <MenuItem onClick={() => {openFolderCreatorBox(folder._id)}}>
                                Create new folder
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem >
                                Create new indicator
                            </MenuItem>
                            
                        </ContextMenu>
                        </>
                       
                }

                
               
            </MDBTreeviewList>
        )
    } )
    
}

export default ShowTree