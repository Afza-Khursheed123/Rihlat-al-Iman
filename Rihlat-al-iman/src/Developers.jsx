import React from 'react';
import NavBar from './navbar';
import Footer from './Footer';
export default function Developers() {
    const customDarkGreen = "#243127"
    const customGreen = "#464b37";
    const CustomYellow = "#dcab20"
    return (
        <>
            <NavBar />
            <div className="relative w-full justify-center items-center h-full flex flex-col">
                <div id='about-content' className="relative sm:w-[60%]  h-full flex flex-col sm:p-4 p-8 overflow-hidden mt-16 sm:mt-20 mb-8">
                    <div className="relative z-10  text-left ">
                        <h1 className="text-2xl  sm:text-6xl font-stretch-condensed font-semibold font-sans " style={{ color: customDarkGreen }}>
                            💻Developers & Contributors   </h1>
                    </div>
                    <div className="relative z-10 text-left mb-4">
                        <h2 className="text-lg sm:text-lg  font-sans font-semibold bold mt-4 sm:mt-10 italic" style={{ color: customGreen }}>
                            At Rehlit-ul-Iman, we are dedicated to providing a structured, accessible, and authentic collection of Ahadeeth, meticulously categorized for easy navigation and study. To support the Ummah’s access to the Sunnah, we offer open tools and welcome contributions from developers and researchers.
                        </h2>
                    </div>
                    <div className="relative z-10 text-left">
                        <h2 className="text-xl sm:text-3xl font-sans font-semibold bold  " style={{ color: CustomYellow }}>
                            Project Highlights </h2>
                    </div>
                    <div className="flex flex-col z-10 w-full  p-1 text-left">
                        <div className=" py-4 font-sans  text-white rounded-lg   " style={{ color: customGreen }}>
                            <ul className='text-lg p-2 font-sans' style={{ color: customGreen }}>
                                <li><span className='font-semibold'>Frontend: </span>React + Vite (Blazing fast performance)
                                </li>
                                <li><span className='font-semibold'>Styling: </span>Tailwind CSS
                                </li>
                                <li><span className='font-semibold'>API: </span>Open Hadith data (no key required)
                                </li>
                            </ul>
                            <ul className='text-lg p-2 font-sans' style={{ color: customGreen }}>
                                <li><span className='font-semibold'>Github Repo: </span><a className="hover:underline " href="https://github.com/Afza-Khursheed123/Rihlat-ul-Iman" target='_blank'>Rihlat-ul-Iman</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative z-10 text-left">

                        <h2 className="text-xl sm:text-3xl font-sans font-semibold bold " style={{ color: CustomYellow }}>
                            How to Help
                        </h2>
                    </div>
                    <div className="flex flex-col z-10 w-full   p-1 text-left">
                        <div className=" py-4 font-sans  text-white rounded-lg   " style={{ color: customGreen }}>

                            <ul className='text-lg p-2 font-sans' style={{ color: customGreen }}>
                                <li><span className='font-semibold'>Code: </span>Fork our <a className="hover:underline " href="https://github.com/Afza-Khursheed123/Rihlat-ul-Iman" target='_blank'>GitHub repositories</a> and submit pull requests.
                                </li>
                                <li><span className='font-semibold'>Data Verification: </span>Assist in reviewing/categorizing Ahadeeth.
                                </li>
                                <li><span className='font-semibold'>Feedback: </span> Report bugs or suggest features via GitHub Issues.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative z-10 text-left">
                        <h2 className="text-xl sm:text-3xl font-sans font-semibold bold " style={{ color: CustomYellow }}>
                            Contact Maintainers
                        </h2>
                    </div>
                    <div className="flex flex-col z-10 w-full  p-1 text-left">
                        <div className=" py-4 font-sans  text-white rounded-lg   " style={{ color: customGreen }}>
                            <p className='font-semibold'>If you have any questions or want to contact the maintainers, create an issue on GitHub or email afzakhursheed3@gmail.com. We will get back to you as soon as we can, in sha Allah.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
}
