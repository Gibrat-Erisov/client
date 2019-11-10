import React from 'react';
import { MDBTreeviewList, MDBTreeviewItem } from 'mdbreact';
import s from './style.module.css'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const ShowTree = (props) => {
    
    const {folders,compID,indicators} = props

    return folders.map( folder => {

        if(folder.idMainFolder === compID)

        return(
            <MDBTreeviewList key={folder._id} title={folder.name}  far open>
                
               { indicators.map( (ind, index) => { if(ind.idMainFolder === folder._id) {
                       return   <>
                                <ContextMenuTrigger id={index}>
                                    <MDBTreeviewItem className="well" icon='check-circle' title={ind.name} key={index} far />
                                </ContextMenuTrigger>

                                <ContextMenu className={s.front} id={index}>
                                    <MenuItem  >
                                        ContextMenu Item 1
                                    </MenuItem>
                                    <MenuItem divider />
                                    <MenuItem >
                                        ContextMenu Item 2
                                    </MenuItem>
                                    <MenuItem divider />
                                    <MenuItem>
                                        ContextMenu Item 3
                                    </MenuItem>
                                </ContextMenu>
                                </>
                                    
                   }
               })}

               {folders.find( x => x.idMainFolder  ===  folder._id) &&
                        <>
                        <ContextMenuTrigger id={folder._id}>
                            <ShowTree className="well" compID={folder._id} folders={folders}  indicators = {indicators}/>
                        </ContextMenuTrigger>

                        <ContextMenu className={s.front} id={folder._id}>
                            <MenuItem  >
                                ContextMenu Item 1
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem >
                                ContextMenu Item 2
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem>
                                ContextMenu Item 3
                            </MenuItem>
                        </ContextMenu>
                        </>
                       
                }

                
               
            </MDBTreeviewList>
        )
    } )
    
}

export default ShowTree