import React,{useState,useEffect} from 'react'
import Avatar from '@material-ui/core/Avatar';
import db from '../firebase';
import { useSelector } from 'react-redux';


function SidebarChat(props) {
	const [messages, setMessages] = useState([]);
	const currUser = useSelector(state => state.user || JSON.parse(localStorage.getItem("user")))

	useEffect(() => {
		if (props.user.id) {
			var ref=db.collection('users').doc(props.user.id).collection("messages").where("friend", "==", currUser.email)
			ref.orderBy("timestamp","desc").onSnapshot(snapshot => {
				var mess = (snapshot.docs.map(doc => doc))
				setMessages(mess);
			});
		}
	}, [props.user.id]);


	return (
		
		<div className="sidebar-chat">
			<Avatar src={props.user.data().picture}/>
			<div className="info">
				<h3 className="info-name">{props.user.data().name}</h3> 
					{/* TODO: 
					Add a character Limit to mesaage and name
					*/}
				<p>{messages[0]?.data().message}</p>
			</div>

		</div>
	)
}

export default SidebarChat
