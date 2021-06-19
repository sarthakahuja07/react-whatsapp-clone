import React from 'react'
import Avatar from '@material-ui/core/Avatar';

function SidebarChat() {

	var messgae="loe haa hamh aekdmngalgka gik naugbghab fgh dhsadha hahah ahaha"
	return (
		<div className="sidebar-chat">
			<Avatar alt="Remy Sharp" src="https://avatars.dicebear.com/api/human/sarthak.svg" />
			<div className="info">
				<h2 className="info-name">Name</h2> 
					{/* TODO: 
					Add a character Limit to mesaage and name
					*/}
				<p>{messgae}</p>
			</div>

		</div>
	)
}

export default SidebarChat
