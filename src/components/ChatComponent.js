import React from 'react'
import '../css/chatComponents.css';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import ChatMessage from './ChatMessageComponent';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Formik, Form, Field } from 'formik';

function Chat() {

	function pressedEnter(e){
		if(e.key==="Enter"){
			document.forms.submit();
		}
	}

	return (
		<div className="chat-component">
			<div className="chat-header">
				<Avatar alt="Remy Sharp"  />
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
				<ChatMessage />
				<ChatMessage />
				<ChatMessage />
				<ChatMessage />
				<ChatMessage />
				<ChatMessage />
				<ChatMessage />

			</div>

			<div className="chat-footer">

				<IconButton>
					<InsertEmoticonIcon />
				</IconButton>
				<Formik
					initialValues={{ message: '' }}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}>
					{({ isSubmitting }) => (
						<Form className="form" autoComplete="off">
							<Field className="message-input" name="message" id="message" placeholder="Type a message" />
							<button className="input-button" type="submit" disabled={isSubmitting}>
								Send A Message
							</button>
						</Form>
					)}
				</Formik>
				
				{/* <form>
					<textarea type="text" placeholder="Type a message" />
					<button type="submit"> Send a Message</button>
				</form> */}
				<IconButton>
					<MicIcon />
				</IconButton>
			</div>
		</div>
		
	)
	
}

export default Chat;
