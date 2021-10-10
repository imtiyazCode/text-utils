import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        setText(`${text.toUpperCase()}`)
    }
    const handleLoClick = () =>{
        setText(`${text.toLowerCase()}`)
    }
    const handleCapClick = () =>{
        if(text.length > 0){
            const words = text.split(" ");
            setText(`${words.map(word => {
                return word[0].toUpperCase() + word.substring(1).toLowerCase()
            }).join(" ")}`)
        }
    }

    const handleOnChange = (e) =>{
        const newText = e.target.value
        setText(newText);
    }

    const [text, setText ] = useState('')

    return (
        <>
            <div className="container px-5 mt-3 mb-3">
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    {/* <label htmlFor="textarea1" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" id="textarea1" value={text} rows="8" onChange={handleOnChange} placeholder='Enter Text'></textarea>
                </div>
                <div className="btn btn-primary mx-1" onClick={handleUpClick}>To UpperCase</div>
                <div className="btn btn-primary mx-1" onClick={handleLoClick}>To LowerCase</div>
                <div className="btn btn-primary" onClick={handleCapClick}>To Capitalize</div>
                {/* <div className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</div> */}
            </div>
            <div className="container px-5 mb-3">
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.005 * text.split(" ").length} Minute to Read</p>
            </div>
        </>
    )
}
