"use server"

import { Question } from '../models/question';
import Button from '../components/Button';
import ActionQuestion from './components/ActionQuestion';

async function getData() : Promise<Question[]> {
    const res = await fetch(process.env.API_ROUTE_URL + 'questions')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return await res.json() as Question[];
    //return data.map(mapQuestion);
}

export default async function Admin() {
    const questions = await getData()
 
   return (
     <>
        <div className='flex justify-between'>
            <h1 className="text-3xl font-bold">Questions disponibles</h1>
            <div className=''>
                <Button text="Ajouter une question" href="/admin/add" />
            </div>
        </div>
        
        <div className="flex flex-col m-4 gap-2">
             {questions.map((question, index) => (
                 <div key={index} className="p-4 border rounded shadow mb-4">
                    <div className='flex flex-row gap-2'>
                        <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
                        <ActionQuestion actionType="delete" questionId={question.id} />
                    </div>
                     
                     {question.choices.map((choice, index) => (
                         <div key={index} className="p-2 border rounded shadow mb-2">
                             <p className="font-medium">{choice.text}</p>
                             {choice.indicatorCoefficients.map((ic, index) => (
                                 <div key={index} className="flex justify-start items-center mt-1 gap-3">
                                     <p className="text-sm bg-blue-200 rounded px-2">{ic.coefficient}</p>
                                     <p className="text-sm">{ic.indicator}</p>
                                 </div>
                             ))}
                         </div>
                     ))} 
                 </div>
             ))}
         </div>
     </>
   )
 }
 