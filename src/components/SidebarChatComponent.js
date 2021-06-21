import React from 'react'
import Avatar from '@material-ui/core/Avatar';

function SidebarChat(props) {
	return (
		
		<div className="sidebar-chat">
			<Avatar src={props.user.data().picture}/>
			<div className="info">
				<h3 className="info-name">{props.user.data().name}</h3> 
					{/* TODO: 
					Add a character Limit to mesaage and name
					*/}
				<p>Message</p>
			</div>

		</div>
	)
}

export default SidebarChat
