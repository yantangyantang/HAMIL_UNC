import * as React from "react"
import "./styles.css"
import Header from '../components/header'
import NIH from '../logos/NIH.svg.png'
import EPA from '../logos/EPA.png'
import DOD from '../logos/DOD.png'
import UNC from '../logos/UNC.png'
import SILS from '../logos/SILS.png'

export default function Sponsors() {
  return (
  <div>
    <Header />
    <h1>Our Sponsors</h1>
      <p>We are grateful to our sponsors for their support...</p>

        {/* Display sponsor logos */}
        <div className="sponsor-logos">
        <img src={NIH} alt="Sponsor 1" />
        <img src={EPA} alt="Sponsor 2" />
        <img src={DOD} alt="Sponsor 3" />
        <img src={UNC} alt="Sponsor 4" />
        <img src={SILS} alt="Sponsor 5" />
      </div>
  </div>
  )
}