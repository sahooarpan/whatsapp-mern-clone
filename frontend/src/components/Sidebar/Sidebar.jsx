import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import Chat from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { IconButton,Avatar } from '@material-ui/core';
import SideBarChat from '../SideBarChat/SideBarChat'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://friendsconnect.s3.amazonaws.com/Dhoni-Gettyjpg.jpg"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <Chat/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                    
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input type="text" placeholder="Search or start new chat" />

                </div>
            </div> 
            <div className="sidebar__chats">
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                

            </div>           
        </div>
    )
}

export default Sidebar
