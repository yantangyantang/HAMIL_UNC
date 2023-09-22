// import * as React from "react";
// import "./styles.css";
// import Header from '../components/header';
// import { Link } from 'gatsby'; 
// import Footer from '../components/Footer';
// import "./publications-styles.css";
// import Select from 'react-select'; // Import the react-select component

// // Define an array of news items with date information and tags
// const newsItems = [
//   {
//     date: new Date("2023-09-16"),
//     title: "UNC HAMIL has launched the official website on Sep 15th",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada a libero in condimentum. Nunc suscipit ligula sit amet nibh ultrices, vel condimentum ligula ultrices.",
//     tags: ["vaccine", "research", "unc hamil"],
//   },
//   {
//     date: new Date("2023-09-02"),
//     title: "News item 2",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada a libero in condimentum. Nunc suscipit ligula sit amet nibh ultrices, vel condimentum ligula ultrices.",
//     tags: ["tag1", "tag2"],
//   },
// ];

// // Create an array of unique tags from news items
// const allTags = [...new Set(newsItems.flatMap((news) => news.tags))].map((tag) => ({
//   value: tag,
//   label: tag,
// }));

// // Create an array of unique years from news items
// const allYears = [...new Set(newsItems.map((news) => news.date.getFullYear()))].map((year) => ({
//   value: year,
//   label: year.toString(),
// }));

// // Placeholder option for "Choose tag"
// const chooseTagOption = { value: "chooseTag", label: "Choose tag" };

// // Placeholder option for "Choose year"
// const chooseYearOption = { value: "chooseYear", label: "Choose year" };

// // Sort the news items by date (newest first)
// newsItems.sort((a, b) => b.date - a.date);

// export default function Publications() {
//   const [selectedTags, setSelectedTags] = React.useState([]);
//   const [selectedYear, setSelectedYear] = React.useState(null);

//   // Function to filter publications based on the selected tags and year
//   const filteredNews = newsItems.filter((news) => {
//     const tagFilter =
//       selectedTags.length === 0 || selectedTags.some((selectedTag) => news.tags.includes(selectedTag.value));

//     const yearFilter = !selectedYear || selectedYear.value === news.date.getFullYear();

//     return tagFilter && yearFilter;
//   });

//   const clearTagSelection = () => {
//     setSelectedTags([]);
//   };

//   const clearYearSelection = () => {
//     setSelectedYear(null);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="news-container">
//         <h1>Publications</h1>

//         <div className="search-bar-container">
//           {/* Multi-select dropdown for tags */}
//           <Select
//             className="search-bar"
//             isMulti
//             options={[chooseTagOption, ...allTags]}
//             value={selectedTags}
//             onChange={(selectedOptions) => setSelectedTags(selectedOptions)}
//             placeholder="Choose Tags..."
//             isClearable={true}
//           />

//           {/* Dropdown for searching by year */}
//           <Select
//             className="search-bar"
//             options={[chooseYearOption, ...allYears]}
//             value={selectedYear}
//             onChange={(selectedOption) => setSelectedYear(selectedOption)}
//             placeholder="Choose Year..."
//             isClearable={true}
//           />
//         </div>

//         <div className="clear-buttons">
//           <button className="clear-button" onClick={clearTagSelection}>
//             Clear Tags
//           </button>
//           <button className="clear-button" onClick={clearYearSelection}>
//             Clear Year
//           </button>
//         </div>

//         <ul className="news-list">
//           {filteredNews.map((news, index) => (
//             <li className="news-item" key={index}>
//               <div className="news-header">
//                 <h3>{news.date.toLocaleDateString()}</h3>
//                 <h2>
//                   <a href={`/news/news${index + 1}/`}>{news.title}</a>
//                 </h2>
//               </div>
//               <p>{news.description}</p>
//               <div className="news-tags">
//                 {news.tags.map((tag, tagIndex) => (
//                   <span key={tagIndex} className="tag">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Footer />
//     </div>
//   );
// }



// import * as React from "react";
// import "./styles.css";
// import Header from '../components/header';
// import { Link } from 'gatsby'; 
// import Footer from '../components/Footer';
// import "./publications-styles.css";
// import Select from 'react-select'; // Import the react-select component

// // Define an array of news items with date information and tags
// const newsItems = [
//   {
//     date: new Date("2023-09-16"),
//     title: "UNC HAMIL has launched the official website on Sep 15th",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada a libero in condimentum. Nunc suscipit ligula sit amet nibh ultrices, vel condimentum ligula ultrices.",
//     tags: ["vaccine", "research", "unc hamil"],
//   },
//   {
//     date: new Date("2021-09-02"),
//     title: "News item 2",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada a libero in condimentum. Nunc suscipit ligula sit amet nibh ultrices, vel condimentum ligula ultrices.",
//     tags: ["tag1", "tag2"],
//   },
//   {
//     date: new Date("2022-09-16"),
//     title: "UNC HAMIL",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada a libero in condimentum. Nunc suscipit ligula sit amet nibh ultrices, vel condimentum ligula ultrices.",
//     tags: ["vaccine", "tag3", "unc hamil"],
//   },
// ];

// // Create an array of unique tags from news items
// const allTags = [...new Set(newsItems.flatMap((news) => news.tags))].map((tag) => ({
//   value: tag,
//   label: tag,
// }));

// // Create an array of unique years from news items
// const allYears = [...new Set(newsItems.map((news) => news.date.getFullYear()))].map((year) => ({
//   value: year,
//   label: year.toString(),
// }));

// // Placeholder option for "Choose tag"
// const chooseTagOption = { value: "chooseTag", label: "Choose tag" };

// // Placeholder option for "Choose year"
// const chooseYearOption = { value: "chooseYear", label: "Choose year" };

// // Sort the news items by date (newest first)
// newsItems.sort((a, b) => b.date - a.date);

// export default function Publications() {
//   const [selectedTags, setSelectedTags] = React.useState([]);
//   const [selectedYear, setSelectedYear] = React.useState(null);

//   // Function to filter publications based on the selected tags and year
//   const filteredNews = newsItems.filter((news) => {
//     const tagFilter =
//       selectedTags.length === 0 || selectedTags.some((selectedTag) => news.tags.includes(selectedTag.value));

//     const yearFilter = !selectedYear || selectedYear.value === news.date.getFullYear(); // Fixed the year filter condition

//     return tagFilter && yearFilter;
//   });

//   const clearTagSelection = () => {
//     setSelectedTags([]);
//   };

//   const clearYearSelection = () => {
//     setSelectedYear(null);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="news-container">
//         <h1>Publications</h1>

//         {/* Multi-select dropdown for tags */}
//         <Select
//           isMulti
//           options={[chooseTagOption, ...allTags]}
//           value={selectedTags}
//           onChange={(selectedOptions) => setSelectedTags(selectedOptions)}
//           placeholder="Search by tags..."
//           isClearable={true} // Allow clearing tag selection
//         />

//         {/* Dropdown for searching by year */}
//         <Select
//           options={[chooseYearOption, ...allYears]}
//           value={selectedYear}
//           onChange={(selectedOption) => setSelectedYear(selectedOption)}
//           placeholder="Search by year..."
//           isClearable={true} // Allow clearing year selection
//         />

//         <button onClick={clearTagSelection}>Clear Tags</button>
//         <button onClick={clearYearSelection}>Clear Year</button>

//         <ul className="news-list">
//           {filteredNews.map((news, index) => (
//             <li className="news-item" key={index}>
//               <div className="news-header">
//                 <h3>{news.date.toLocaleDateString()}</h3>
//                 <h2>
//                   <a href={`/news/news${index + 1}/`}>{news.title}</a>
//                 </h2>
//               </div>
//               <p>{news.description}</p>
//               <div className="news-tags">
//                 {news.tags.map((tag, tagIndex) => (
//                   <span key={tagIndex} className="tag">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Footer />
//     </div>
//   );
// }


import * as React from "react";
import "./styles.css";
import Header from '../components/header';
import { Link } from 'gatsby'; 
import Footer from '../components/Footer';
import "./publications-styles.css";
import Select from 'react-select'; // Import the react-select component

// Define an array of news items with date information and tags
const newsItems = [
  {
    date: new Date("2023-09-16"),
    title: "UNC HAMIL has launched the official website on Sep 15th",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada a libero in condimentum. Nunc suscipit ligula sit amet nibh ultrices, vel condimentum ligula ultrices.",
    tags: ["vaccine", "research", "unc hamil"],
  },
  {
    date: new Date("2021-09-02"),
    title: "News item 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada a libero in condimentum. Nunc suscipit ligula sit amet nibh ultrices, vel condimentum ligula ultrices.",
    tags: ["tag1", "tag2"],
  },
  {
    date: new Date("2022-09-02"),
    title: "News item 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada a libero in condimentum. Nunc suscipit ligula sit amet nibh ultrices, vel condimentum ligula ultrices.",
    tags: ["tag3", "research", "unc hamil"],
  },
];

// Create an array of unique tags from news items
const allTags = [...new Set(newsItems.flatMap((news) => news.tags))].map((tag) => ({
  value: tag,
  label: tag,
}));

// Create an array of unique years from news items
const allYears = [...new Set(newsItems.map((news) => news.date.getFullYear()))].map((year) => ({
  value: year,
  label: year.toString(),
}));

// Sort the news items by date (newest first)
newsItems.sort((a, b) => b.date - a.date);

export default function Publications() {
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [selectedYear, setSelectedYear] = React.useState(null);

  // Function to filter publications based on the selected tags and year
  const filteredNews = newsItems.filter((news) => {
    const tagFilter =
      selectedTags.length === 0 || selectedTags.some((selectedTag) => news.tags.includes(selectedTag.value));

    const yearFilter = !selectedYear || selectedYear.value === news.date.getFullYear();

    return tagFilter && yearFilter;
  });

  const clearTagSelection = () => {
    setSelectedTags([]);
  };

  const clearYearSelection = () => {
    setSelectedYear(null);
  };

  return (
    <div>
      <Header />
      <div className="news-container">
        <h1>Publications</h1>

        <div className="search-bar-container">
          {/* Multi-select dropdown for tags */}
          <Select
            className="search-bar"
            isMulti
            options={allTags}
            value={selectedTags}
            onChange={(selectedOptions) => setSelectedTags(selectedOptions)}
            placeholder="Choose Tags..."
            isClearable={true}
          />

          {/* Dropdown for searching by year */}
          <Select
            className="search-bar"
            options={allYears}
            value={selectedYear}
            onChange={(selectedOption) => setSelectedYear(selectedOption)}
            placeholder="Choose Year..."
            isClearable={true}
          />
        </div>

        <div className="clear-buttons">
          <button className="clear-button" onClick={clearTagSelection}>
            Clear Tags
          </button>
          <button className="clear-button" onClick={clearYearSelection}>
            Clear Year
          </button>
        </div>

        <ul className="news-list">
          {filteredNews.map((news, index) => (
            <li className="news-item" key={index}>
              <div className="news-header">
                <h3>{news.date.toLocaleDateString()}</h3>
                <h2>
                  <a href={`/news/news${index + 1}/`}>{news.title}</a>
                </h2>
              </div>
              <p>{news.description}</p>
              <div className="news-tags">
                {news.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

