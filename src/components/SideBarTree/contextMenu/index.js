import React from 'react';
import s from '../style.module.css'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { MDBTreeviewItem } from 'mdbreact';

const CTXM = (props) => {

    const {id,icon,title,key} = props
    return  <>
                <ContextMenuTrigger id={id}>
                    <MDBTreeviewItem className="well" icon={icon} title={title} key={key} far />
                </ContextMenuTrigger>

                <ContextMenu className={s.front} id={id}>
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

export default CTXM