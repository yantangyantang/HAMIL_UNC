import * as React from "react"
import "./styles.css"
import Header from '../components/header'
import { Link } from 'gatsby'; 
import Footer from '../components/Footer';

// Define an array of news items with date information
const newsItems = [
  {
    date: new Date("2023-09-16"),
    title: "UNC HAMIL has launched the official website on Sep 15th",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada a libero in condimentum. Nunc suscipit ligula sit amet nibh ultrices, vel condimentum ligula ultrices.",
  },
  {
    date: new Date("2023-09-02"),
    title: "News item 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada a libero in condimentum. Nunc suscipit ligula sit amet nibh ultrices, vel condimentum ligula ultrices.",
  },
];

// Sort the news items by date (newest first)
newsItems.sort((a, b) => b.date - a.date);

export default function News() {
  return (
    <div>
      <Header />
      <div className="news-container">
        <h1>UNC HAMIL News</h1>
        <ul className="news-list">
          {newsItems.map((news, index) => (
            <li className="news-item" key={index}>
              <span className="news-date">
                {news.date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <h2>
                <a href={`/news/news${index + 1}/`} style={{ color: '020296' }}>{news.title}</a>
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
