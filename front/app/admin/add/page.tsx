import { revalidatePath } from 'next/cache';
import React from 'react'

export default function CreateQuestion() {

  const addQuestion = async (formData: FormData) => {
    "use server";

    const question = {
      title: formData.get('question'),
      answer: formData.get('answer'),
      choices: [
        {
          text: formData.get('choices[0].text'),
          indicatorCoefficients: [
            {
              indicator: 'HAPPY',
              coefficient: Number(formData.get('choices[0].indicator[0]'))
            },
            {
              indicator: 'ENJOYMENT',
              coefficient: Number(formData.get('choices[0].indicator[1]'))
            },
            {
              indicator: 'MONEY',
              coefficient: Number(formData.get('choices[0].indicator[2]'))
            }
          ]
        },
        {
          text: formData.get('choices[1].text'),
          indicatorCoefficients: [
            {
              indicator: 'HAPPY',
              coefficient: Number(formData.get('choices[1].indicator[0]'))
            },
            {
              indicator: 'ENJOYMENT',
              coefficient: Number(formData.get('choices[1].indicator[1]'))
            },
            {
              indicator: 'MONEY',
              coefficient: Number(formData.get('choices[1].indicator[2]'))
            }
          ]
        }
      ]
    };

    console.log(JSON.stringify(question));

    await fetch('http://localhost:3000/api/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(question),
    });

    // Revalidate cache when we will refresh the page /admin
    revalidatePath('/admin');
  }

  return (
    <div className='m-10'>
      <h1 className="text-2xl font-bold opacity-80">Create question</h1>
      <form className="flex flex-col gap-5" action={addQuestion}>
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
