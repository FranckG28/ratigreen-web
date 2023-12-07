import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface ButtonProps {
    text?: string;
    href?: string;
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
}

export default function Button({ text, onClick, href, type }: ButtonProps) {
    const buttonElement = (
      <button onClick={onClick} className="flex items-center gap-2 text-black font-bold" type={type}>
        {text}
        <Image
          src="/arrow-narrow-right.svg"
          alt="Arrow"
          style={{ width: 20, height: 20 }}
          width={20}
          height={20}
        />
      </button>
    );
  
    return (
      <div className='flex flex-row items-center justify-center bg-yellowColor rounded-full px-5 py-2 gap-2 shadow-yellowColor transition ease-in-out hover:shadow-buttonHoverColor hover:scale-110'>
        {href ? <Link href={href}>{buttonElement}</Link> : buttonElement}
      </div>
    );
  }
  
