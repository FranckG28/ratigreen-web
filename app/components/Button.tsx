import React from 'react'
import Image from 'next/image';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
    return (
        <div className='flex flex-row bg-yellowColor rounded-full px-5 py-2 gap-2 shadow-yellowColor transition ease-in-out hover:shadow-buttonHoverColor hover:scale-110'>
            <button onClick={onClick} className=" text-black font-bold">
                {text}
            </button>
            <Image
                src="arrow-narrow-right.svg"
                alt="Arrow right"
                width={20}
                height={20}
            />
        </div>
        
    );
}
