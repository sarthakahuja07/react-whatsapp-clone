import React from 'react'
import Sidebar from './SidebarComponent';
import Chat from './ChatComponent';

import '../css/mainComponent.css';

function Main(props) {
    return (
        <div className="app-body-container">
        <div className="app-body">
            <Sidebar />
            <Chat />
        </div>

        </div>
    )
}

export default Main
