import useFetch from "./custom_hook/useFetch";
import { useNavigate } from "react-router-dom";
import NavBar from './navbar';
import './index.css'
const API_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions.json";
function Category() {
  const customDarkGreen = "#243127"
  const customGreen = "#464b37";
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
          link: "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-abudawud.json",
          linkmin: "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-abudawud.min.json",
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
  const getEnglishCollections = (data) => {
    const englishCollections = [];
    for (const key in data) {
      if (data[key].collection) {
        const englishItems = data[key].collection.filter(
          (item) => item.language === "English"
        );
        englishCollections.push(...englishItems);
      }
    }
    return englishCollections;
  };
  const handleCategoryClick = (categoryName) => {
    navigate(`/chapters/${categoryName}`);
  };
  const englishCollections = data ? getEnglishCollections(data) : [];
  const showCollections = () => {
    if (englishCollections.length > 0) {
      return englishCollections.map((collection, index) => {
        const bookName = data[collection.book]?.name || collection.book;
        return (
          <>
            <li key={index} className="w-full">
              <a
                onClick={() => handleCategoryClick(collection.book.toLowerCase())}
                className="flex items-start sm:items-center p-3 font-bold rounded-lg hover:shadow-amber-200 cursor-pointer bg-white shadow-sm"
              >
                <span className="flex-1 ms-3 break-words sm:whitespace-nowrap">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight" style={{ color: customGreen }}>
                    {bookName}
                  </h5>
                </span>
              </a>
            </li>
          </>
        );

      }
      )
    }
    else {
      return <p>No English collections available.</p>;
    }
  };
  return (
    <>
      <NavBar />
      <div className="flex w-full sm:max-w-full sm:bg-cover bg-white">
        <div className="sm:flex sm:flex-col sm:items-center sm:justify-center sm:p-4 w-full mt-20 sm:mb-10  mx-auto ">
          <div className="w-full  sm:max-w-1/2 justify-center items-center  p-6 rounded-lg shadow-sm sm:p-6 bg-white  ">
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400 text-right">حَدَّثَنَا سَعِيدُ بْنُ عُفَيْرٍ، قَالَ حَدَّثَنَا ابْنُ وَهْبٍ، عَنْ يُونُسَ، عَنِ ابْنِ شِهَابٍ، قَالَ قَالَ حُمَيْدُ بْنُ عَبْدِ الرَّحْمَنِ سَمِعْتُ مُعَاوِيَةَ، خَطِيبًا يَقُولُ سَمِعْتُ النَّبِيَّ صلى الله عليه وسلم يَقُولُ ‏ "‏ مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ، وَإِنَّمَا أَنَا قَاسِمٌ وَاللَّهُ يُعْطِي، وَلَنْ تَزَالَ هَذِهِ الأُمَّةُ قَائِمَةً عَلَى أَمْرِ اللَّهِ لاَ يَضُرُّهُمْ مَنْ خَالَفَهُمْ حَتَّى يَأْتِيَ أَمْرُ اللَّهِ ‏"‏‏.‏</p>
            <p className="text-sm font-normal pt-2" style={{ color: customDarkGreen }}>
              Narrated Muawiya:</p>
            <p className="italic font-semibold" style={{ color: customGreen }}>
              I heard Allah's Messenger (ﷺ) saying, "If Allah wants to do good to a person, He makes him comprehend the religion. I am just a distributor, but the grant is from Allah. (And remember) that this nation (true Muslims) will keep on following Allah's teachings strictly and they will not be harmed by any one going on a different path till Allah's order (Day of Judgment) is established."
            </p>
            <p className="text-sm font-normal " style={{ color: customDarkGreen }}>
              Source: Ṣaḥīḥ al-Bukhārī 71 <br />Grade: Muttafaqun Alayhi</p>
            <ul className="my-4 space-y-3 w-full">
              {loading ? <p className="ftext-lg font-medium leading-none text-center   rounded-full animate-pulse " style={{ color: customGreen }}>Loading...</p> : showCollections()}

            </ul>
          </div>
        </div>
      </div>
    </>
  );

}
export default Category;