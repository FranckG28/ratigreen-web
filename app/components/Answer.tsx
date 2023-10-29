import React from 'react'

export interface ResultProps {
    img: string;
    question: string;
    choice: string;
}

export default function Answer({img, question, choice}: ResultProps) {
  return (
    <div>
        Hello world
        {choice}
    </div>
  )
}
