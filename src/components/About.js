import React , {useState}  from 'react'

export default function About() {

 const [mystyle, setMystyle] = useState({
    color:'black' ,
    backgroundColor:'white'

 })

 const [btntext, setbtntext] = useState(" Enable dark mode")


 const toggleswitch = () => {

     if (mystyle.color==='black') {
       setMystyle({
        color:'white' ,
        backgroundColor:'black'
       })
       setbtntext("Enable light mode")
     }
     else{
        setMystyle({
            color:'black' ,
            backgroundColor:'white'
           })
           setbtntext("Enable dark mode")
     }
 }









  return (
    <div className='container'style={mystyle}>
        <h1 className='my2'> About us</h1>

        <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      
      <button style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>  About Site </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={mystyle}>
      <div className="accordion-body" style={mystyle} >
     

Welcome to TextMan, your ultimate destination for seamless text manipulation! TextMan is a versatile platform designed to empower users in effortlessly handling and transforming text data. Whether you're a writer, coder, student, or anyone dealing with text, TextMan is your go-to resource for enhancing, modifying, and analyzing textual content.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header"> 
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
    <strong>  Key Features </strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mystyle}>
      <div className="accordion-body">
        <strong>   String Operations:</strong>
    
Conduct fundamental string operations with ease. TextMan's user-friendly interface ensures straightforward manipulation of text, from concatenation to extraction and substitution.
<br />
<strong>   Regex Playground: </strong>

Immerse yourself in the world of regular expressions with TextMan's Regex Playground. Construct and test regex patterns to match, extract, or replace specific patterns within your text effortlessly.
<br />
<strong>Case Transformation:</strong>
Change the case of your text effortlessly with a single click. Convert text to uppercase, lowercase, title case, or even invert the case for a creative touch.

      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    
    
   
  </div>
</div>


<div className="container" >
<button type="button" onClick={toggleswitch} class="btn btn-primary my-3">{btntext}</button>

</div>










    </div>
  )
}
