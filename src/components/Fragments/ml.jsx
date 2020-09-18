import React from 'react';

const background = {
  backgroundColor: '#E5e5e5',
  textAlign: 'center',
  padding: '1rem',
  height: '100vh'
}

const pad = {
  padding: '1rem'
}

function ML () {
  return (
    <>
      <div style={background}>
        <div className='container'>
          <h1> What is Machine Learning?</h1>
            <div style={pad}>
              <p>
                Have you ever wondered how smart technology can really get, given that the majority of human knowledge is contained within computers ? 
                In a sentence machine learning (ML) is the study of computer algorithms that improve automatically <strong>through experience.</strong>
                Let’s make the description a bit more though, and relate this to our program. We do extensive  data mining focusing on exploratory data analysis through key words and more for unsupervised learning. 
              </p>

              <p>
                In its applications for finding funding machine learning employs what is refered to as predictive analytics. Remember we only want to serve you the highest potential opportunities. Reducing your time and efforts of sorting through the multitudes of available grants/funds.
                Take the study of patterns and combine it with the computers ability to self learn while exposed to tetrabytes of funding data. At Grant Us Funding we add a dash of linquistics, and you get a continually improving machine learning on relevent data.
                Machine learning is all about programming software to process, analyze and learn from large amounts of  data, making information available and useful, with context for your needs.
              </p>
            </div>

            <h3><strong>So, what does this have to do with grants?</strong></h3> 
            <div style={pad}>
              <p>
                Digital information is only useful when we derive an understanding of the interactions, the context, and then make those translations understood.
                When you look for a grant match, it’s essential to be able to describe your project in detail.  Generally, the more specific your work is to the intent of the grantor, the higher the potential for funding. 
                At Grant Us Funding we couple deep knowledge of you and your project with machine learning amplifying our abilitity to serve you focused opportunities. 
              </p>
            </div>

            <h3><strong>How our Grant Matching Works</strong></h3> 
            <div style={pad}>
              <p>
                When combined with your starting keywords, our ML/NLP-enabled system provides an expanded view expanding the number of opportuniites.
                Our Data Search returns suggested Data Keywords relevant to your starting input. Don’t waste time combing through endless lists and fields; with our software, you’re directed straight to additional Keywords that are found in similar grants and from our NLP
                Then we focus your results, maximizing your opportunities for successful funding. And this is only the start of our smarter technology.
              </p>
            </div>
        </div>
      </div>
    </>
  )
};

export default ML;