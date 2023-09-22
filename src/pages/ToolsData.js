import * as React from "react"
import "./styles.css"
import Header from '../components/header'
import { Link } from 'gatsby'; 
import Footer from '../components/Footer';

// Define an array of news items with date information
const newsItems = [
  {
    title: "GitHub Link 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada a libero in condimentum. Nunc suscipit ligula sit amet nibh ultrices, vel condimentum ligula ultrices.",
  },
  {
    title: "GitHub Link 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada a libero in condimentum. Nunc suscipit ligula sit amet nibh ultrices, vel condimentum ligula ultrices.",
  },
];

export default function ToolsData() {
  return (
    <div>
      <Header />
      <div className="news-container">
        <h1>Tools and Data</h1>
        <ul className="news-list">
          {newsItems.map((news, index) => (
            <li className="news-item" key={index}>
              <h2>
                <a href={"https://github.com/yantangyantang/HAMIL_UNC"}>{news.title}</a>
              </h2>
              <p>{news.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
