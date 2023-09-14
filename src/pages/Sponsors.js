import * as React from "react"
import "./styles.css"
import Header from '../components/header'
import Footer from '../components/Footer';
import NIH from '../logos/NIH.svg.png'
import EPA from '../logos/EPA.png'
import DOD from '../logos/DOD.png'
import UNC from '../logos/UNC.png'
import SILS from '../logos/SILS.png'


export default function Sponsors() {
  return (
  <div>
    <Header />
    <h1 style={{ marginTop: '30px',textAlign: 'center', fontFamily: 'sans-serif' }} >Our Sponsors</h1>
      <p style={{ textAlign: 'center' }}>[add content]</p>

        {/* Display sponsor logos */}
        <div className="sponsor-logos" style={{ marginBottom: '100px' }}>
        <img src={NIH} alt="Sponsor 1" />
        <img src={EPA} alt="Sponsor 2" />
        <img src={DOD} alt="Sponsor 3" />
        <img src={UNC} alt="Sponsor 4" />
        <img src={SILS} alt="Sponsor 5" />
      </div>
      <Footer />
  </div>
  )
}