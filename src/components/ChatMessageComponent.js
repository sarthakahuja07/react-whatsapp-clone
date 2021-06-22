import React from 'react'

function ChatMessage(props) {
    console.log(props.message)
    var d = new Date(props.message.timestamp.seconds * 1000)
    return (
        <div className="chat-message-component" >
            <div className={`chat-message ${(props.message.sender)?'chat-message-sender':""}`}>
                <p>{props.message.message}
                </p>
                <span className="time">{d.toLocaleTimeString()}</span>
            </div>
        </div>
    )
}

export default ChatMessage
