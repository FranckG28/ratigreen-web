import React from 'react'
import { Question } from '../models/question.model'
import InputMessage from './InputMessage'

export default function Message({ question }: { question: Question }) {

  return (
    <div className="overflow-auto bg-white rounded-xl h-1/3 justify-center shadow shadow-primary/50">
        <div className="text-primary-content text-lg font text-center p-10">
        {question.messages.map((message) => (
            <div className="chat chat-start" key={message.id}>
                <div className="chat-header">
                {message.user.name}
                </div>
                <div className="chat-bubble">{message.text}</div>
            </div>
        ))}
        <InputMessage questionId={question.id} />
        </div>
    </div>
  )
}
