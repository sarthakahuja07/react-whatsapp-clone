import React from 'react'

function ChatMessage(props) {
    if(props.message.timestamp){
        var d = new Date(props.message.timestamp.seconds * 1000)
    }else{
        d=new Date();
    }

    return (
        <React.Fragment  key={props.message}>
        
        <div className="chat-message-component">
            <div className={`chat-message ${(props.message.isReceiver)?'chat-message-sender':""}`}>
                <p>{props.message.message}
                </p>
                <span className="time">{d.toLocaleTimeString()}</span>
            </div>
        </div>
            </React.Fragment>
    )
}

export default ChatMessage
