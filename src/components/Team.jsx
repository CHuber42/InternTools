import React from 'react';
import Banner from './banner';
import AlanImage from '../img/alanjpgformat1.png';
import ClintImage from '../img/Clint.png';
import HristoImage from '../img/hristo.png';
import RachelImage from '../img/rachel.png';
import BryonImage from '../img/bryon.png';

const background = {
  backgroundColor: '#E5E5E5',
  width: '100%',
}

const aboutStatement = {
  textAlign: 'center',  
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  marginBottom: '100px',
  fontSize: '48px',
  lineHeight: '56px',
  letterSpacing: '0.1em',
  color: '#000000',
  paddingTop: '3rem'
}

const aboutParagraph = {
  fontSize: '18px',
  fontFamily: 'Rhodium Libre'
}

function Team() {

  return (
    <>
      <Banner />

      <div style={background}>
        <section id="about-info">
          <h1 style={aboutStatement}>How We Found Our Funding Pathway</h1>
          <div className="container">
            <div className="row">
                <div className="info-left col-sm-12 col-md-6">
                    <h1><span>Alan Kadish</span></h1>
                    <p><span><em>Founder – CEO</em></span></p>
                    <p style={aboutParagraph}>
                      After both taking a number of grant writing courses over the years and using the public (and very expensive) university tools, it became apparent that finding the right funding opportunity is literally a game of hide and seek.</p>
                    <p style={aboutParagraph}><strong> It’s 2020 and it’s time for a change!</strong></p>
                    <p style={aboutParagraph}>Whether you’re looking for private or government monies, the current software is time consuming, unfriendly and definitely not intuitive.</p>
                    <p style={aboutParagraph}><strong>Grant Us Funding™ tools are designed for you.</strong></p> 
                    <p style={aboutParagraph}>As fellow grantee’s, we get your perspective. We recognize that ease of use, really deep data searches are far more than just keywords. Keeping current daily, finding new opportunities and maintaining a laser focus on what fits you are all critical to successfully getting funded. </p>
                    <p style={aboutParagraph}><strong>Have we been successful ?</strong></p>
                    <p style={aboutParagraph}>If you’re wondering.. Yes, we have been successful at getting multiple grants, and have multiple times secured startup funding. The process was painful and time consuming, and never made sense when we considered the strength of our current computing power and ability to search and analyze big data. (Until GUF).</p>
                </div>
                <div className="info-right col-sm-12 col-md-6">
                    <img style={{borderRadius: '1rem',boxShadow: '.1rem .5rem .5rem rgba(0, 0, 0, 0.25'}} src={AlanImage} alt="Alan"/>
                </div>
            </div>
        </div>
        <div style={{marginTop: '3rem'}}className="container ">
                <div className="row" id="clint">
                    <div className="info-right2 col-sm-12 col-md-6 ">
                        <img style={{borderRadius: '1rem',boxShadow: '.1rem .5rem .5rem rgba(0, 0, 0, 0.25'}} src={ClintImage} alt="Clint"/>
                    </div>
                    <div className="info-left2 col-sm-12 col-md-6 ">
                        <h1><span className="about-name">Matthew Johnson</span></h1>
                        <p><span className="about-title"><em>CTO-Data Guru</em></span></p>
                        <p style={aboutParagraph}> Matthew is a consummate data junky, in a great format. He understands the nature of interactions and embraces the challenge of making sense out of piles of information; essentially, a grant seekers guru.</p>
                        <p style={aboutParagraph}>Having worked at multiple startups and successfully completed a number of custom programs, it was an easy lift for Matthew to sift through the catacombs of data successfully finding the right grant/s for your project.</p> 
                        <p style={aboutParagraph}>His ability to use a combination of both machine learning and maximized data search brings even the hard to find grants and funding opportunities forward. And.. he recognizes the need to keep the users needs in focus at all times. Yielding a very easy to use front end while retaining the needed complexity of the search, under the hood.</p>
                    </div>
                </div>
            </div>
            <h1 style={{textAlign: 'center', paddingTop: '2rem', fontFamily: 'Rhodium Libre'}}>And of course, our dedicated programming experts.</h1>
            <div className="container text-center">
                <img  style={{marginLeft: '1rem', borderRadius:'1rem',boxShadow: '.1rem .5rem .5rem rgba(0, 0, 0, 0.25'}} src={RachelImage} alt="Rachel"/>
                <img  style={{marginLeft: '1rem', borderRadius:'1rem',boxShadow: '.1rem .5rem .5rem rgba(0, 0, 0, 0.25'}} src={HristoImage} alt="Hristo"/>
                <img  style={{marginLeft: '1rem', borderRadius:'1rem',boxShadow: '.1rem .5rem .5rem rgba(0, 0, 0, 0.25'}} src={BryonImage} alt="Bryon"/>
            </div>
    </section>
</div>

    </>
  )
};

export default Team;