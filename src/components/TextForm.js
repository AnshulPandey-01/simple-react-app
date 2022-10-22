import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChnage = (event) => {
        console.log("On change");
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
        console.log(words);
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
        for (let i = 1; i < words.length - 1; i++) {
            words[i] = ". " + words[i].charAt(1).toUpperCase() + words[i].slice(2);
        }
        setText(words.join("") + ".");
        console.log("Converted sentence case!");
    }

    const handleExtraSpaces = () => {
        console.log("Remove Extra Spaces was clicked:", text);
        setText(text.replace(/\s+/g, " "));
        console.log("Extra spaces removed!");
    }

    const handleCopyText = () => {
        console.log("Copy text was clicked:", text);
        let textArea = document.getElementById("myBox");
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
        console.log("Text copied!");
    }

    const handleClearText = () => {
        console.log("Clear text was clicked:", text);
        setText("");
        console.log("Cleared text!");
    }

    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-2">
                    <textarea className="form-control" value={text} onChange={handleOnChnage} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Upper case</button>
                <button className="btn btn-primary mx-3" onClick={handleLowClick}>Lower case</button>
                <button className="btn btn-primary" onClick={handleSentenceCase}>Sentence case</button>
                <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <div style={{float: 'right'}}>
                    <button className="btn btn-primary mx-3" onClick={handleCopyText}>Copy</button>
                    <button className="btn btn-outline-primary" onClick={handleClearText}>Clear</button>
                </div>
            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                <p>Words: {text.split(" ").length} | Length: {text.length}</p>
                <p>Read time: {0.008 * text.split(" ").length} minutes</p>
            </div>
            <div className="container my-2">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
