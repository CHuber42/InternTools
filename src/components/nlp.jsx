import React from 'react';
import {Link} from 'react-router-dom';

const sectionBreakStyle = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '36px',
    textAlign: 'center',
    color: '#000000',
    paddingTop: '3rem',
    paddingBottom: '1rem'
}

const background = {
    backgroundColor: '#E5e5e5',
}

const JoinUs = {
    marginTop: '100px',
    textAlign: 'center'
}

const example = {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '28px',
    color: '#000000',
    marginTop:  '4rem'
}

const actionstyle = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '36px',
    lineHeight: '42px',
    textAlign: 'center',
    color: '#000000',
}

const buttonOrange = {
    backgroundColor: '#CF974F',
    border: 'none',
    color: '#FFFFFF',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '24px',
    boxShadow: '.1rem .5rem .5rem rgba(0, 0, 0, 0.25)',
    width: '15rem',
    marginTop: '2rem',
    borderRadius: '5rem'
}
 
const buttonGreen = {
    backgroundColor: '#128049',
    border: 'none',
    color: '#FFFFFF',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '24px',
    boxShadow: '.1rem .5rem .5rem rgba(0, 0, 0, 0.25)',
    width: '15rem',
    marginTop: '2rem',
    borderRadius: '5rem',
    marginBottom: '2rem'
}
  
//   #joinus {
//     margin-top: 100px;
//   }
  
//   #joinus ul {
//     list-style-type: none;
//     display: block;
//     text-align: center;
//   }
  
//   #joinus ul li {
//     margin: 30px 30px 0 30px;
//   }
  
//   #joinus .start {
//     font-family: 'Roboto';
//     font-style: normal;
//     font-weight: normal;
//     font-size: 30px;
//     line-height: 35px;
//     text-align: center;
//     margin-top: 30px;
//     color: #000000;
//   }
  
//   #joinus p {
//     margin-bottom: 50px;
//   }

function NLP () {
    return(
        <>
        <div style={background}>
            <div className="container"> 

                <h1 style={sectionBreakStyle}>What is Natural Language Processing?</h1> 
                <h2>Have you ever wondered how smart technology can really get, given that the majority of human knowledge is contained within the written word? </h2>
                <br/> 
                <h3>Take the study of Linguistics and combine it with Computer Science. Add a dash of Information Engineering and some Artificial Intelligence, and you get Natural Language Processing.</h3>
                <br/> 
                <h3>It’s all about programming software to process and analyze large amounts of Natural Language data, and make that information available and useful with context.</h3>
                <h2 style={sectionBreakStyle}><strong>What does this have to do with grants?</strong></h2> 
                <h2>Digital information is only useful when we derive an understanding of the interactions, the context, and then make those translations understood.</h2>
                <br/> 
                <h3>When you look for a grant match, it’s essential to be able to describe your project in detail.  Generally, the more specific your work is to the intent of the grantor, the higher the potential for funding.</h3> 
                <h2 style={sectionBreakStyle}><strong>How our grant matching works:</strong></h2> 
                <h2>When combined with your starting Keywords, the NLP-enabled system provides a shortcut between you and the funding you need.</h2>
                <br/> 
                <h3>Our Data Search returns suggested Data Keywords relevant to your starting input. Don’t waste time combing through endless lists and fields; with our software, you’re directed straight to additional Keywords that are found in similar grants. Then we focus your results, maximizing your opportunities for successful funding. And this is only the start of our smarter technology.</h3> 



                <h3 style={example}>An example of the process.....in 2 clicks (animation/video of process at some point)</h3>  
                
                <div style={JoinUs}> 

                    <h2 style={actionstyle}>Join us for a piece of the action.</h2> 
                    <Link to='/pricingplans'><span style={buttonGreen}>Plans and Pricing</span></Link>     
                    <h4>Or Start Your</h4> 
                    <Link to='/freetrial'><span style={buttonOrange}>7-Day Free Trial</span></Link>          
                    <p style={{marginBottom: '0px', paddingBottom: '1rem'}}>No Credit Card Required</p>      
                </div>
            </div>
        </div>
        </>
    )
}

export default NLP;