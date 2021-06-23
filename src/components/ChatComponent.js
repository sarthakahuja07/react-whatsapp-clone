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
import { useSelector } from 'react-redux';
import firebase from 'firebase';

function Chat(props) {

	let { userID } = useParams();
	const [user, setUser] = useState("");
	const [messages, setMessages] = useState([]);
	const currUser = useSelector(state => state.user || JSON.parse(localStorage.getItem("user")))



	useEffect(() => {
		if (userID) {
			db.collection('users').doc(userID)
				.onSnapshot((doc) => {
					var u = doc.data()
					setUser(u);

				});

			// db.collection('users').doc(userID).collection("messages").where("friend","==",currUser.email).orderBy("timestamp", "asc").onSnapshot(snapshot => {
			// 	snapshot.docs.map(doc => {
			// 		console.log(doc.data())
			// 	})
			// });

			var ref = db.collection('users').doc(userID).collection("messages").where("friend", "==", currUser.email)


			ref.orderBy("timestamp", "desc").onSnapshot(snapshot => {
				var mess = (snapshot.docs.map(doc => doc))
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
					
					<p>{"Last Seen "+(messages[0] &&  messages[0].data() && messages[0].data().timestamp? new Date(messages[0].data().timestamp.seconds*1000).toLocaleTimeString():"")}</p>

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

			<div className="chat-body" id="chat-body">
				{console.log("rendering")}
				{messages.map(message => {
					return (
						<React.Fragment key={message.id}>
							<ChatMessage message={message.data()}></ChatMessage>
						</React.Fragment>
					);
				})}
			</div>

			<div className="chat-footer">

				<IconButton>
					<InsertEmoticonIcon />
				</IconButton>
				<Formik
					initialValues={{ message: '' }}
					onSubmit={(values, { resetForm, setSubmitting }) => {
						db.collection("users").doc(userID).collection("messages").add({
							message: values.message,
							isReceiver: true,
							friend: currUser.email,
							timestamp: firebase.firestore.FieldValue.serverTimestamp()
						})
						db.collection("users").where("email", "==", currUser.email)
							.get()
							.then((querySnapshot) => {
								querySnapshot.forEach((doc) => {
									db.collection("users").doc(doc.id).collection("messages").add({
										message: values.message,
										isReceiver: false,
										friend: user.email,
										timestamp: firebase.firestore.FieldValue.serverTimestamp()
									})
								});
							})
							.catch((error) => {
								console.log("Error getting documents: ", error);
							});
						resetForm();
						setSubmitting(false);
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
