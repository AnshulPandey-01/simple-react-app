import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleOnChnage = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        console.log("Upper case was clicked:", text);
        let newText = text.toUpperCase();
        setText(newText);
        console.log("Converted to UPPERCASE!");
    }

    const handleLowClick = () => {
        console.log("Lower case was clicked:", text);
        let newText = text.toLowerCase();
        setText(newText);
        console.log("Converted to lowercase!");
    }

    const handleSentenceCase = () => {
        console.log("Sentence case was clicked:", text);
        let words = text.toLowerCase().split(".");
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
        for (let i = 1; i < words.length - 1; i++) {
            words[i] = ". " + words[i].charAt(1).toUpperCase() + words[i].slice(2);
        }
        setText(words.join("") + ".");
        console.log("Converted to sentence case!");
    }

    const handleExtraSpaces = () => {
        console.log("Remove Extra Spaces was clicked:", text);
        setText(text.replace(/\s+/g, " "));
        console.log("Extra spaces removed!");
    }

    const handleCopyText = () => {
        console.log("Copy text was clicked:", text);
        navigator.clipboard.writeText(text);
        props.alert("Copied to clipboard!", "success");
        console.log("Text copied!");
    }

    const handleClearText = () => {
        console.log("Clear text was clicked:", text);
        setText("");
        console.log("Cleared text!");
    }

    const getNoOfWords = () => {
        let words = text.split(/\s+/);
        let noOfWords = words.filter((w) => w.length !== 0);
        return noOfWords.length;
    }

    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-2">
                    <textarea className="form-control" value={text} onChange={handleOnChnage} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleUpClick}>Upper case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleLowClick}>Lower case</button>
                <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleSentenceCase}>Sentence case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <div style={{float: 'right'}}>
                    <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCopyText}>Copy</button>
                    <button disabled={text.length===0} className="btn btn-outline-primary my-1" onClick={handleClearText}>Clear</button>
                </div>
            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                <p>Words: {getNoOfWords()} | Length: {text.length}</p>
                <p>Read time: {0.008 * getNoOfWords()} minutes</p>
            </div>
            <div className="container my-2">
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
