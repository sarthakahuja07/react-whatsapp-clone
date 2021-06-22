import React from 'react'

function ChatMessage(props) {
    console.log(props.message)
    return (
        <div className="chat-message-component">
            <div className="chat-message chat-message-receiver">
                <p>{props.message.message}<span className="time">10:23 pm</span>
                </p>
            </div>
        </div>
    )
}

export default ChatMessage
