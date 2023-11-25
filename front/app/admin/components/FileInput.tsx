"use client"

import React from 'react'
import Image from 'next/image';

export default function FileInput({ imagePreviewUrl, setImagePreviewUrl }: { setImagePreviewUrl: React.Dispatch<React.SetStateAction<string | null>>, imagePreviewUrl: string | null }) {

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    let reader = new FileReader();
  
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result as string);
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagePreviewUrl(null);
    }
  }

  return (
    <div className='grid lg:grid-cols-2 gap-y-2'>
        <div className='flex flex-col gap-2'>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">PNG, JPG (MAX. 800x400px).</p>
            <input
                type="file"
                name="image" onChange={handleImageUpload}
                accept="image/png, image/jpeg"
                className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4 file:rounded-md
                    file:border-0 file:text-sm file:font-semibold
                    file:bg-pink-50 file:text-pink-700
                    hover:file:bg-pink-100"
            />            
        </div>
              
        {imagePreviewUrl && <Image src={imagePreviewUrl} alt="Preview" width={100} height={100}/>}
    </div>
  )
}
