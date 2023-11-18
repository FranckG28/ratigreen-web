import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface ButtonProps {
    text: string;
    href?: string;
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
}

export default function Button({ text, onClick, href, type }: ButtonProps) {
    return (
        <div className='flex flex-row items-center justify-center bg-yellowColor rounded-full px-5 py-2 gap-2 shadow-yellowColor transition ease-in-out hover:shadow-buttonHoverColor hover:scale-110'>
            {href ? 
                (<Link href={href!}>
                    <button onClick={onClick} className=" text-black font-bold">
                        {text}
                    </button>
                  </Link>
                  ) : 
                (
                    <button onClick={onClick} className=" text-black font-bold" type={type}>
                            {text}
                    </button>
                )
            }
        
            <Image
                src="/arrow-narrow-right.svg"
                alt="Arrow"
                style={{ width: 20, height: 20 }}
                width={20}
                height={20}
            />
        </div>
        
    );
}
