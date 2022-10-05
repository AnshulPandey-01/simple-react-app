import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChnage = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        console.log("Uppercase was clicked:", text);
        let newText = text.toUpperCase();
        setText(newText);
        console.log("Converted to uppercase!");
    }

    const [text, setText] = useState("Enter text here");
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChnage} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    )
}
