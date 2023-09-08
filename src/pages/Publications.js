import * as React from "react"
import "./styles.css"
import Header from '../components/header'
import Dropdown from '../components/Dropdown';

export default function Publications() {
  return (
  <div>
    <Header />
    <h1>Publications</h1>
    <Dropdown /> 
    <ul>
        <li>Publication 1</li>
        <li>Publication 2</li>
    </ul>
  </div>
  )
}