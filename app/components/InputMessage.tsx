"use client"

import { ArrowBigRight } from 'lucide-react'
import React, { useRef } from 'react'
import { addMessageAction } from '../actions/add-message.action';

export default function InputMessage({ questionId }: { questionId: number }) {

  const inputRef = useRef(null);

  const onAddMessage = async (formData: FormData) =>
  {
    const response = addMessageAction(formData, questionId);
  };

  return (
    <form ref={inputRef} action={onAddMessage} >
      <input type="text" name="text" placeholder="Type here" className="input input-bordered input-primary text-primary w-full max-w-xs" />
        <button type="submit">
            <ArrowBigRight />
        </button>
    </form>
  )
}
