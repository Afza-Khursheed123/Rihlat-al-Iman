import { useNavigate } from "react-router-dom";
import useFetch from "./custom_hook/useFetch";
import { useParams } from "react-router-dom";
import NavBar from "./navbar";
function Chapters() {
  const customGreen = "#646738"
  const customCream = "#fff4aa"
  const CustomYellow = "#fccd65"
  const { categoryName } = useParams();
  const API_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-${categoryName}.json`;
  const navigate = useNavigate()
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
  const { data, loading, error } = useFetch(API_URL, fallbackData, {
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleChapterClick = (bookNumber) => {
    const loc = `/hadith/${categoryName}/${bookNumber}`

    navigate(loc);

  };
  const showChapters = () => {
    if (data && data.metadata && data.metadata.sections) {
      return Object.entries(data.metadata.sections).map(([sectionNumber, sectionTitle]) => (
        sectionNumber > 0 ?
          <div onClick={() => handleChapterClick(sectionNumber)}
            key={sectionNumber}
            className="max-w-sm sm:w-80 w-38 sm:p-6 p-3 opacity-100 sm:h-60 h-60 rounded-lg  dark:border-gray-700 mt-2 mb-2 m-1 sm:m-3 relative text-sm hover:shadow-lg hover:shadow-amber-200" style={{ background: customGreen }}
          >

            <a target="_blank" rel="noopener noreferrer "  >
              <h5 className="mb-2 text-2lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >
                Chapter {sectionNumber}: <p className="text-sm sm:text-lg font-light sm:font-semibold font-sans italic mt-2" style={{ color: "white" }}>{sectionTitle}</p>
              </h5>
            </a>
            <p className="sm:mb-3 mb-1 font-normal text-gray-700 dark:text-gray-400" style={{ color: CustomYellow }}>
              <strong className="text-xs sm:text-lg font-medium">Hadith Range: {data.metadata.section_details[sectionNumber].hadithnumber_first} - {data.metadata.section_details[sectionNumber].hadithnumber_last}</strong>
            </p>
            <button
              onClick={() => handleChapterClick(sectionNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs inline-flex items-center sm:text-sm font-medium text-left mb-2 bottom-4 hover-white"
              style={{ color: customCream }}          >
              View Ahadees
            </button>
          </div>
          : null
      ));
    } else {
      return <p>No sections available.</p>;
    }
  };
  return (
    <>

      <div className="absolute bg-white" >
        <NavBar />
        <div className="mt-20 bg-white" >

          <div className="flex flex-wrap sm:gap-3 gap-2 justify-center">
            {loading ? <p>Loading...</p> : showChapters()}
          </div>
        </div>
      </div>
    </>
  );
}
export default Chapters
