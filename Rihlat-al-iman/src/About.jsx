import React from 'react';
import NavBar from './navbar';
import backGroundImg from './public/backGroundImg.jpg'
import Footer from './Footer';
export default function About() {
  const customDarkGreen = "#243127"
  const customGreen = "#464b37";
  const CustomYellow = "#dcab20"
  return (
    <>
      <div className="w-full fixed top-0 z-50">
        <NavBar />
      </div>
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
        <div className="flex flex-col z-10 items-center justify-center w-40 h-18">
       <a href="#about-content">
  <button className="px-3 py-1 text-lg font-medium text-center text-white rounded-full" style={{ backgroundColor: customGreen }}>
    See more...
  </button>
</a>
        </div>
      </div>
      <div id='about-content' className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden sm:mt-20 mb-8">
        <div className="relative z-10 text-center">
          <h1 className="text-3xl  sm:text-6xl font-stretch-condensed font-semibold font-sans " style={{ color: customDarkGreen }}>
            🔍Mission and Vision       </h1>
        </div>
        <div className="relative z-10 text-center">

          <h2 className="text-xl sm:text-3xl font-sans font-semibold bold mt-4 sm:mt-10 " style={{ color: CustomYellow }}>
            🌿 Nurturing Iman Through Knowledge           </h2>
        </div>
        <div className="flex flex-col z-10 w-full  sm:w-1/2 p-1 text-center">
          <div className="px-3 py-4 text-lg font-sans  text-white rounded-lg   " style={{ color: customGreen }}>

            <p className="italic font-normal" style={{ color: customGreen }}>
              Rihlat-al-Iman starts with a focus on authentic Hadiths, carefully curated to inspire reflection and action. Each Hadith is paired with practical guidance to help you embody the Sunnah in daily life. Future updates will expand to include Quranic tafsir, Duas, and Dhikr reminders.
            </p>
          </div>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-xl sm:text-3xl font-sans font-semibold bold mt-6 " style={{ color: CustomYellow }}>
            📖 Hadith-Centered Learning          </h2>
        </div>
        <div className="flex flex-col z-10 w-full  sm:w-1/2 p-1 text-center">
          <div className="px-3 py-4 text-lg font-sans  text-white rounded-lg   " style={{ color: customGreen }}>

            <p className="italic font-normal" style={{ color: customGreen }}>
              Rihlat al-Iman is built on the foundation of authentic Hadiths, sourced from trusted collections (Sahih al-Bukhari, Muslim, etc.). Each Hadith includes:

            </p>
            <ul>
              <li>Clear translations (Arabic & English)</li>

              <li>Practical lessons to apply the Prophet’s (ﷺ) teachings</li>

              <li>Daily reminders to keep your heart connected to the Sunnah </li>
            </ul>
          </div>
        </div>

        <div className="relative z-10 text-center">
          <h2 className="text-xl sm:text-3xl  font-sans font-semibold bold mt-6 " style={{ color: CustomYellow }}>
            🕌 Why Start with Hadith?
          </h2>
        </div>
        <div className="flex flex-col z-10 mt-3 w-full  sm:w-1/2 pt-4 text-center">
          <div className="px-3 py-4 text-lg font-poppins text-white rounded-lg   " style={{ color: customGreen }}>
            <div className="w-full max-w-full  justify-center items-center p-6  rounded-lg shadow-sm sm:p-6 bg-white  ">

              <p className="text-sm sm:text-lg font-semibold textleft italic">
                The Prophet (ﷺ) said:
              </p>
              <p className="text-sm sm:text-lg   text-gray-500 dark:text-gray-400 mt-2 " style={{ color: customGreen }}>
                وَمَنْ أَحْيَا سُنَّتِي فَقَدْ أَحَبَّنِي وَمَنْ أَحَبَّنِي كَانَ مَعِي فِي الْجَنَّة
              </p>

              <p className="text-sm sm:text-lg font-normal pt-2 italic" style={{ color: customDarkGreen }}>
                Anas ibn Malik reported:</p>
              <p className="italic font-semibold" style={{ color: customGreen }}>
                Whoever revives my Sunnah has loved me, and whoever loves me will be with me in Paradise.

              </p>
              <p className="text-sm font-normal mt-2" style={{ color: customDarkGreen }}>
                Ṣaḥīḥ al-Bukhārī 71 </p><p className="text-sm font-normal mt-2" style={{ color: customDarkGreen }}>
                Sunan al-Tirmidhī 2678</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
