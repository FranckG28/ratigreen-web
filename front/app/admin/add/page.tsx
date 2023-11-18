import { addQuestionAction } from '@/app/actions/add-question.action';
import React from 'react'

export default function CreateQuestion() {

  return (
    <div className='m-10'>
      <h1 className="text-2xl font-bold opacity-80">Create question</h1>
      <form className="flex flex-col gap-5" action={addQuestionAction}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Question:</label>
          <input type="text" value="question" name="question" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
      <label className="block text-sm font-medium text-gray-700">
        Answer:
        <input type="text" value="answer"  name="answer" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
      </label>
      <fieldset>
        <legend className="text-sm font-medium text-gray-700">First choice</legend>
        <label className="block text-sm font-medium text-gray-700">
          Answer:
          <input type="text" name="choices[0].text" value="answer1"  required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </label>
        <div>
          <label className="block text-sm font-medium text-gray-700">Indicator Happy:</label>
          <input type="number" min="0" max="100" value="1" name="choices[0].indicator[0]" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

          <label className="block text-sm font-medium text-gray-700">Indicator Enjoy:</label>
          <input type="number" min="0" max="100" value="1" name="choices[0].indicator[1]" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

          <label className="block text-sm font-medium text-gray-700">Indicator Money:</label>
          <input type="number" min="0" max="100" value="1" name="choices[0].indicator[2]" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        
      </fieldset>
      <fieldset>
        <legend className="text-sm font-medium text-gray-700">Second choice</legend>
        <label className="block text-sm font-medium text-gray-700">
          Answer:
          <input type="text" value="answer2" name="choices[1].text" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </label>
        <div>
          <label className="block text-sm font-medium text-gray-700">Indicator Happy:</label>
          <input type="number" min="0" max="100" value="2" name="choices[1].indicator[0]" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

          <label className="block text-sm font-medium text-gray-700">Indicator Enjoy:</label>
          <input type="number" min="0" max="100" value="2" name="choices[1].indicator[1]" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

          <label className="block text-sm font-medium text-gray-700">Indicator Money:</label>
          <input type="number" min="0" max="100" value="2" name="choices[1].indicator[2]" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
      </fieldset>
      <button type="submit" className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
    </form>
    </div>
  );
}
