import React from 'react';
import Banner from './banner';
import AlanImage from '../img/alanjpgformat1.png';
import ClintImage from '../img/Clint.png';
import HristoImage from '../img/hristo.png';
import RachelImage from '../img/rachel.png';
import BryonImage from '../img/bryon.png';


function Team() {

  return (
    <>
      <Banner />

      <div className="container">
        <section id="about-info">
          <h1 className="about-statement">How We Found Our Funding Pathway</h1>
          <div className="container">
            <div className="row">
                <div className="info-left col-sm-12 col-md-6">
                    <h1><span className="about-name">Alan Kadish</span></h1>
                    <p><span className="about-title">Founder – CEO</span></p>
                    <p className="about-text">
                      After both taking a number of grant writing courses over the years and using the public (and very expensive) university tools, it became apparent that finding the right funding opportunity is literally a game of hide and seek.</p>
                    <p className="about-text"><strong> It’s 2020 and it’s time for a change!</strong></p>
                    <p className="about-text">Whether you’re looking for private or government monies, the current software is time consuming, unfriendly and definitely not intuitive.</p>
                    <p className="about-text"><strong>Grant Us Funding™ tools are designed for you.</strong></p> 
                    <p className="about-text">As fellow grantee’s, we get your perspective. We recognize that ease of use, really deep data searches are far more than just keywords. Keeping current daily, finding new opportunities and maintaining a laser focus on what fits you are all critical to successfully getting funded. </p>
                    <p className="about-text"><strong>Have we been successful ?</strong></p>
                    <p className="about-text">If you’re wondering.. Yes, we have been successful at getting multiple grants, and have multiple times secured startup funding. The process was painful and time consuming, and never made sense when we considered the strength of our current computing power and ability to search and analyze big data. (Until GUF).</p>
                </div>
                <div className="info-right col-sm-12 col-md-6">
                    <img src={AlanImage} alt="Alan"/>
                </div>
            </div>
        </div>
        <div className="container ">
                <div className="row" id="clint">
                    <div className="info-right2 col-sm-12 col-md-6 ">
                        <img src={ClintImage} alt=""/>
                    </div>
                    <div className="info-left2 col-sm-12 col-md-6 ">
                        <h1><span className="about-name">Matthew Johnson</span></h1>
                        <p><span className="about-title">CTO-Data Guru</span></p>
                        <p className="about-text"> Matthew is a consummate data junky, in a great format. He understands the nature of interactions and embraces the challenge of making sense out of piles of information; essentially, a grant seekers guru.</p>
                        <p className="about-text">Having worked at multiple startups and successfully completed a number of custom programs, it was an easy lift for Matthew to sift through the catacombs of data successfully finding the right grant/s for your project.</p> 
                        <p className="about-text">His ability to use a combination of both machine learning and maximized data search brings even the hard to find grants and funding opportunities forward. And.. he recognizes the need to keep the users needs in focus at all times. Yielding a very easy to use front end while retaining the needed complexity of the search, under the hood.</p>
                    </div>
                </div>
            </div>
            <h1 className="about-team">And of course, our dedicated programming experts.</h1>
            <div className="container text-center">
                <img src={RachelImage}/>
                <img src={HristoImage}/>
                <img src={BryonImage}/>
            </div>
    </section>
</div>

    </>
  )
};

export default Team;