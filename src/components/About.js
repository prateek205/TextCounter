import React from 'react'

const About = (props) => {
  return (
    <>
     <div className="container">
        <h2 className='mt-5'>{props.heading}</h2>
        <h5 className='mt-5'><strong>Text Analyzer</strong></h5>
        <p>To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above.</p>

        <h5 className='mt-5'><strong>Free to Use</strong></h5>
        <p>Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. WordCounter will help to make sure its word count reaches a specific requirement or stays within a certain limit.</p>

        <h5 className='mt-5'><strong>Browser Compatibility</strong></h5>
        <p>This Application is easy Compatable to Browsering Software like Firefox, Safari, Opera, Internet Explorer</p>
     </div> 
    </>
  )
}

export default About
