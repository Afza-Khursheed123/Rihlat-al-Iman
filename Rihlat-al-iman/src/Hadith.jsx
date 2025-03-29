import useFetch from "./custom_hook/useFetch";
import { useParams } from "react-router-dom";
import NavBar from "./navbar";
import { useState, useCallback } from "react";
function Hadith() {
    const [showCopied, setShowCopied] = useState(false);
    const customDarkGreen = "#243127"
    const customGreen = "#464b37";
    const customGreen2 = "#646738"
    const { categoryName, bookNumber } = useParams();
    const API_URL1 = `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-${categoryName}.json`;
    const API_URL2 = `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-${categoryName}.json`;
    const copytoclipboard = useCallback((hadith) => {
        window.navigator.clipboard.writeText(hadith.arabic + hadith.english)
        setShowCopied(true)
        setTimeout(() => {
            setShowCopied(false
            )
        }, 1000);
    }, [])
    const fallbackData = {
        abudawud: {
            name: "Sunan Abu Dawud",
            collection: [
                {
                    name: "eng-abudawud",
                    book: "abudawud",
                    author: "Unknown",
                    language: "English",
                    has_sections: true,
                    direction: "ltr",
                    source: "",
                    comments: "",
                    link: "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-bukhari.json",
                    linkmin: "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-bukhari.json",
                },
            ],
        },
    };
    const { data: englishData, loading: englishLoading, error: englishError } = useFetch(API_URL1, fallbackData);
    const { data: arabicData, loading: arabicLoading, error: arabicError } = useFetch(API_URL2, fallbackData);
    if (englishLoading || arabicLoading) {
        return (
            <>
                <NavBar />
                <div className="pt-20 p-3 bg-white min-h-screen flex justify-center items-center">
                    <div className="flex flex-col items-center justify-center w-40 h-20">
                        <div className="px-3 py-2 text-lg font-medium leading-none text-center text-white  rounded-full animate-pulse " style={{ backgroundColor: customGreen2 }}>loading...</div>
                    </div>
                </div>
            </>
        );
    }
    if (englishError || arabicError) {
        return (
            <>
                <NavBar />
                <div className="pt-20 p-3 bg-amber-200 min-h-screen flex justify-center items-center">
                    <div className="text-2xl font-bold text-red-600">
                        Error: {englishError || arabicError}
                    </div>
                </div>
            </>
        );
    }
    const combineHadiths = () => {
        if (!englishData?.hadiths || !arabicData?.hadiths) return [];

        const englishHadiths = englishData.hadiths.filter(
            hadith => hadith.reference.book === parseInt(bookNumber)
        );

        const arabicHadiths = arabicData.hadiths.filter(
            hadith => hadith.reference.book === parseInt(bookNumber)
        );

        return englishHadiths.map(engHadith => {
            const arabicHadith = arabicHadiths.find(
                arHadith => arHadith.hadithnumber === engHadith.hadithnumber
            );

            return {
                number: engHadith.hadithnumber,
                english: engHadith.text,
                arabic: arabicHadith?.text || "Arabic text not available",
                book: bookNumber,
                reference: engHadith.reference
            };
        });
    };
    const combinedHadiths = combineHadiths();
    return (
        <>
            <NavBar />
            <div className="pt-20 p-3  min-h-screen" style={{ background: "white" }}>
                <h1 className="text-2xl font-bold mb-6 text-center">
                    {englishData.metadata?.name || "Hadith Collection"} - Book {bookNumber}
                </h1>
                <div className="max-w-4xl mx-auto">
                    {combinedHadiths.length > 0 ? (
                        combinedHadiths.map(hadith => (
                            <div
                                key={hadith.number}
                                className="w-full p-6 bg-white shadow-lg opacity-100  rounded-lg  mb-5"
                                style={{ background: "white" }}
                            >
                                <h5 className="mb-4 text-2xl font-bold font-sans tracking-tight text-gray-900 dark:text-white"
                                    style={{ color: customDarkGreen }}>
                                    Hadith Number: {hadith.number}
                                </h5>
                                <div className="mb-4">
                                    <p className="font-medium font-serif text-gray-700 dark:text-gray-300 text-right text-xl" dir="rtl"
                                        style={{ color: customDarkGreen }}>
                                        {hadith.arabic}
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <p className=" text-gray-700 dark:text-gray-300 font-sans font-semibold italic"
                                        style={{ color: customGreen }}>
                                        {hadith.english}
                                    </p>
                                </div>
                                <div className="flex max-w-full justify-between ">
                                    <p className="text-sm flex justify-between w-1/2 font-semibold " style={{ color: customDarkGreen }}>
                                        Book: {hadith.book}
                                        <br />
                                        Reference: {englishData.metadata?.name || "N/A"}: {hadith.number}
                                    </p>
                                    <div className="h-10 flex flex-col justify-center items-center relative">
                                        <button
                                            onClick={() => copytoclipboard(hadith)}
                                            className="bg-teal-950 text-white rounded-lg py-2 px-3 hover:bg-teal-800 active:bg-teal-900"
                                            style={{ backgroundColor: customGreen }}
                                        >
                                            copy
                                        </button>
                                        {showCopied && (
                                            <span id="copied" className="absolute -top-6 left-0 right-0 text-center text-sm">
                                                copied!
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-10">
                            <p className="text-xl">No hadiths found for this book.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
export default Hadith
