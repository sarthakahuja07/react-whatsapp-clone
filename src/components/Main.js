import React from 'react'
import Sidebar from './SidebarComponent';
import Chat from './ChatComponent';
import { Switch, Route} from 'react-router-dom';
import Login from './LoginComponent';

import '../css/mainComponent.css';

function Main(props) {

    // function renderChats(){
        
    //     return(
    //         <Chat id={userID}></Chat>
    //     )
    // }

    return (
        <React.Fragment>
            {false ? (<Login />) : (
                <div className="app-body-container">
                    <div className="app-body">
                        <Sidebar />
                        <Switch>
                            <Route path="/chat/:userID" component={Chat}></Route>
                        </Switch>
                    </div>

                </div>
            )}

        </React.Fragment>
    )

}

export default Main
