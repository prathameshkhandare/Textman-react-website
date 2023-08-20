import React, { useState } from 'react'


export default function Inputform(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log('uppercasewasclicked');
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert('converted to Uppercase', 'success');
    }

    const handelOnChange = (event) => {
        // console.log('handle on change')
        setText(event.target.value);
    }


    const handleLoClick = () => {
        // console.log('lowercasewasclicked');
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert('converted to Lowercase', 'success');
    }

    const handleClearClick = () => {
        // console.log('lowercasewasclicked');
        let newtext = "";
        setText(newtext);
        props.showAlert('Text cleared', 'success');
    }
    const handlecopyClick = () => {
        let text = document.getElementById('mybox');
        navigator.clipboard.writeText(text.value)
        props.showAlert('copied to clipboard', 'success');

    }



    const words = text.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const charCount = text.length;

    return (
        <>
            <div className='container'    >
                <h2>{props.heading}</h2>
                <div className="mb-3">

                    <textarea className="form-control " id="mybox" rows="8" value={text} onChange={handelOnChange} style={{ backgroundColor: props.mode === 'light' ? 'light' : 'grey' }} />
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}   >Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}   >Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}   >Clear Text </button>
                <button className="btn btn-primary mx-2" onClick={handlecopyClick}   >Copy Text </button>


            </div>





            <div className="container my-2">
                <h2>your text summary </h2>
                {/* <p> {text.split(" ").length} words and {text.length} characters.</p>
                 */}

                <p>{wordCount} {wordCount === 1 ? 'word' : 'words'} and {charCount} {charCount === 1 ? 'character' : 'characters'}.</p>
                <h3> Preview </h3>
                <p>{text}</p>
            </div>


        </>
    )
}
