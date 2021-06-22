import React from 'react'
import Sidebar from './SidebarComponent';
import Chat from './ChatComponent';
import { Switch, Route} from 'react-router-dom';
import Login from './LoginComponent';
import {useSelector} from 'react-redux';
import '../css/mainComponent.css';

function Main(props) {
    const user = useSelector(state => state.user)
    return (
        <React.Fragment>
            {!user ? (<Login />) : (
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
