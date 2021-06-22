import React, { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from '@material-ui/icons/Search';
import db from '../firebase';
import '../css/sidebarComponent.css'
import {Link} from 'react-router-dom'
import SidebarChat from './SidebarChatComponent';

function Sidebar() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection("users")
            .onSnapshot((querySnapshot) => {
                var userArray = [];
                querySnapshot.forEach((doc) => {
                    userArray.push(doc);
                });
                setUsers(userArray);
            });
        return () => {
            unsubscribe()
        }
    }, [])


    var sidebarChats = users.map((user) => {
        return (
            <Link to={`/chat/${user.id}`}>
                <div key={user.id}>
                    <SidebarChat user={user} ></SidebarChat>
                </div>
            </Link>

        );
    });

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar />
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
                    <SearchIcon />
                    <input type="search" name="name_search" placeholder="Search a chat" className="" id="name_search" />
                </div>
            </div>

            <div className="sidebar-chats">
                {sidebarChats}
            </div>

        </div>
    )
}

export default Sidebar
