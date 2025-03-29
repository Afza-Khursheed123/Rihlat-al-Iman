import React, { useEffect, useState } from 'react';
import Category from './categories';
import backGroundImg from './assets/backGroundImg.jpg'
function Title() {
  const customDarkGreen = "#243127"
  const customGreen = "#464b37"
  return (
    <>
      <div className="relative w-full  h-screen flex flex-col justify-center items-center overflow-hidden " >
        <img
          src={backGroundImg}
          alt="backgroundImage"
          className="absolute inset-0 sm:max-w-full sm:w-full max-w-fit sm:h-full object-cover z-0"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-stretch-condensed font-semibold font-mono " style={{ color: customDarkGreen }}>
            رحلة الإيمان
          </h1>
          <h2 className="text-sm sm:text-xl font-sans font-semibold bold mt-5 " style={{ color: customDarkGreen }}>
            THE JOURNEY OF FAITH
          </h2>
          <h2 className="text-sm sm:text-lg italic font-sans font-semibold bold mt-5 " style={{ color: customDarkGreen }}>
            The Journey of Faith – Strengthening Iman Through the Light of Hadith
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center w-40 h-20">
          <div className="px-3 py-2 text-lg font-medium leading-none text-center text-white  rounded-full animate-pulse " style={{ backgroundColor: customGreen }}>loading...</div>
        </div>
      </div>
    </>
  );
}
function Home() {
  const [showApp, setShowApp] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowApp(true);
    }, 2000);


    return () => clearTimeout(timer);

  }, [])
  return (

    <>
      {showApp ? <Category /> : <Title />}

    </>
  );
}
export default Home