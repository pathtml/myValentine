'use client'
import React, { useState } from 'react';
import Image from 'next/image';

type YesBtnState = 'default' | 'active' | 'clicked';

interface YesNoButtonsProps { }

const YesNoButtons: React.FC<YesNoButtonsProps> = () => {
  const [YesBtnState, setYesState] = useState<YesBtnState>('default');
  const [midText, setMidText] = useState('Will you be my Valentine? 🌹');
  const [yesBtnText, setYesBtnText] = useState('yes');
  const [noCounter, setNoCounter] = useState(0);
  const [imageSrc, setImageSrc] = useState('/heart.png'); // Initial image

  const handleYesBtn = () => {
    setYesState('clicked')
    setMidText('I LOVE YOU 💝')
    setImageSrc('/cuddle.gif')
  }

  const handleNoBtn = () => {
    setNoCounter(noCounter + 1)
    switch (noCounter) {
      case 1:
        setYesBtnText('Please 🫰')
        break;
      case 2:
        setYesBtnText('Please ! 🤟')
        break;
      case 3:
        setYesBtnText('Please !! 😘')
        break;
      case 4:
        setYesBtnText('PLEASE !!! 🥹')
        break
      default:
        setYesBtnText('please 🥺')
        break;
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src={imageSrc} alt="Image" className="mb-4" width={360} height={360} />
      <div className="flex justify-center font-bold text-6xl mb-4 mt-4">
        {midText}
      </div>
      <div className="flex justify-center gap-4">
        <button
          id="yes-button"
          className={`py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-pink-500 focus:outline-none transition duration-300 font-bold
          ${YesBtnState === 'clicked' ? 'hidden' : ''}
          ${noCounter == 1 ? 'text-2xl w-38 h-18': noCounter == 2 ? 'text-3xl w-50 h-28': noCounter == 3? 'text-4xl w-62 h-32':noCounter == 4 ? 'text-5xl w-72 h-36': noCounter > 4 ? 'text-5xl w-72 h-36': ''}
          `}
          onClick={() => handleYesBtn()}
        >
          {yesBtnText}
        </button>
        <button
          id="no-button"
          className={`py-2 px-4 rounded-full bg-red-500 text-white font-bold hover:bg-gray-700 focus:outline-none transition duration-300 h-12
          ${YesBtnState === 'clicked' ? 'hidden' : ''}
          ${noCounter > 5 ? 'hidden': ''}
          `}
          onClick={() => handleNoBtn()}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default YesNoButtons;