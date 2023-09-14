import * as React from "react"
import "./styles.css"
import Header from '../components/header';
import Footer from '../components/Footer';

export default function Home() {
  return (
  <div>
    <Header />
    <h1>UNC Human and Machine Intelligence Lab</h1>
    <p>Homepage</p>
    <Footer />
  </div>
  )
}