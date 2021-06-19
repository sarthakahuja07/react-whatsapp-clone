import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import '../css/sidebarComponent.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import Input from '@material-ui/core/Input';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar src="https://avatars.dicebear.com/api/human/sarthak.svg" />
                <div className="sidebar-header-right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar-search">
                <div className="search-container">
                    <SearchOutlined />
                    <input type="search" name="name_search" className="" id="name_search" />
                </div>
            </div>

            <div className="sidebar-chat">

            </div>

        </div>
    )
}

export default Sidebar
