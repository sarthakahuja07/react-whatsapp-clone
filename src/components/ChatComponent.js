import React from 'react'
import '../css/chatComponents.css';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import ChatMessage from './ChatMessageComponent';
function Chat() {
	return (
		<div className="chat-component">
			<div className="chat-header">
				<Avatar alt="Remy Sharp" src="https://avatars.dicebear.com/api/human/sarthak.svg" />
				<div className="header-info">
					<h3>Name</h3>
					<p>Last seen..</p>
				</div>
				<div className="header-right">
					<IconButton>
						<SearchIcon>
						</SearchIcon>
					</IconButton>
					<IconButton>
						<AttachFileIcon>
						</AttachFileIcon>
					</IconButton>
					<IconButton>
						<MoreVertIcon>
						</MoreVertIcon>
					</IconButton>
				</div>
			</div>

			<div className="chat-body">
				<ChatMessage/>
				<ChatMessage/>
				<ChatMessage/>
				<ChatMessage/>
				<ChatMessage/>
				<ChatMessage/>
				<ChatMessage/>

			</div>

			<div className="chat-footer">

			</div>
		</div>
	)
}

export default Chat;
