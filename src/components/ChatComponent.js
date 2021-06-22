import React, { useEffect, useState } from 'react'
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
import db, { provider, auth } from '../firebase';
import { useParams } from 'react-router-dom';


function Chat(props) {
	let { userID } = useParams();
	const [user, setUser] = useState("");
	const [messages, setMessages] = useState([])

	useEffect(() => {
		if (userID) {
			db.collection('users').doc(userID)
				.onSnapshot((doc) => {
					var u = doc.data()
					setUser(u);
				});

			db.collection('users').doc(userID).collection("messages").orderBy("timestamp", "asc").onSnapshot(snapshot => {
				var mess = (snapshot.docs.map(doc => doc.data()))
				setMessages(mess);
			});
		}
	}, [userID]);

	return (

		<div className="chat-component">
			<div className="chat-header">
				<Avatar src={user.picture} />
				<div className="header-info">
					<h3>{user.name}</h3>
					<p>last seen...</p>

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
				
				{messages.map(message=>{
					return(
						<ChatMessage message={message}></ChatMessage>
					);
				})}
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

				<IconButton>
					<MicIcon />
				</IconButton>
			</div>
		</div>

	)

}

export default Chat;
