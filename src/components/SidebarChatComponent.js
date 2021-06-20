import React from 'react'
import Avatar from '@material-ui/core/Avatar';

function SidebarChat() {

	return (
		<div className="sidebar-chat">
			<Avatar alt="Remy Sharp"  />
			<div className="info">
				<h3 className="info-name">Name</h3> 
					{/* TODO: 
					Add a character Limit to mesaage and name
					*/}
				<p>Message</p>
			</div>

		</div>
	)
}

export default SidebarChat
