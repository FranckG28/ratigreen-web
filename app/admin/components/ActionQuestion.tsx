"use client"

import { removeQuestionAction } from '@/app/actions/remove-question.action';
import { Pen, Trash2 } from 'lucide-react';
import React from 'react'
import { toast } from 'react-toastify';

export interface ActionQuestionProps {
    actionType: string;
    questionId: number;
}

export default function ActionQuestion({ actionType, questionId } : ActionQuestionProps ) {
  const handleAction = async () => {
    if (actionType === 'delete') {
      const response = await removeQuestionAction(questionId);
      if (response.status === 200) {
        toast.success(response.text);
      } else {
        toast.error('Une erreur est survenue lors de l\'ajout de la question.');
      }
    } else if (actionType === 'update') {
      // handle update action
    }
  }

  return (
    <div onClick={handleAction} className='cursor-pointer '>
        {actionType === 'delete' ? <Trash2 /> : <Pen />}
    </div>
  )
}
