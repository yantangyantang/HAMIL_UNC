import * as React from "react"
import "./styles.css"
import Header from '../components/header'

export default function News() {
  return (
  <div>
    <Header />
    <h1>News</h1>
    <ul>
        <li>News item 1</li>
        <li>News item 2</li>
        {/* Add news updates about your lab */}
    </ul>
  </div>
  )
}