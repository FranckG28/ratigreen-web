import { Question } from '../models/question';

async function getData() : Promise<Question[]> {
    const res = await fetch('http://localhost:3000/api/questions')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return await res.json() as Question[];
    //return data.map(mapQuestion);
}

export default async function Admin() {
    const questions = await getData()
 
   return (
     <div className="flex flex-col m-4 gap-2">
         <h1 className="text-2xl font-bold opacity-80">Admin page </h1>
         <div>
             <h2 className="text-lg font-bold mb-4">Questions</h2>
             {questions.map((question, index) => (
                 <div key={index} className="p-4 border rounded shadow mb-4">
                     <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
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
     </div>
   )
 }
 