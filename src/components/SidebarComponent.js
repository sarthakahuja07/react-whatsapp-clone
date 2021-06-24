import React, { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Tooltip from '@material-ui/core/Tooltip';
import SearchIcon from '@material-ui/icons/Search';
import db from '../firebase';
import '../css/sidebarComponent.css'
import { Link } from 'react-router-dom'
import SidebarChat from './SidebarChatComponent';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { userSignIn } from '../redux/actionCreator';

function Sidebar(props) {
    const dispatch = useDispatch()
    const [users, setUsers] = useState([]);
    const user = useSelector(state => state.user || JSON.parse(localStorage.getItem("user")))

    useEffect(() => {
        const unsubscribe = db.collection("users").where("email", "!=", user.email)
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
            <Link to={`/chat/${user.id}`} key={user.id}>
                <div>
                    <SidebarChat user={user} ></SidebarChat>
                </div>
            </Link>

        );
    });

    function signOut() {
        dispatch(userSignIn(null));
    }

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar src={props.user.photoURL} />
                <div className="sidebar-header-right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <Tooltip title="log out">
                        <Link to={'/'}>
                        <IconButton aria-label="log out" onClick={signOut}>
                            <MoreVertIcon />
                        </IconButton>
                    </Link>
                    </Tooltip>

                    
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
