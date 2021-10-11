import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        setText(`${text.toUpperCase()}`)
        props.showAlert('Conerted To UpperCase!', "success")
    }
    const handleLoClick = () =>{
        setText(`${text.toLowerCase()}`)
        props.showAlert('Conerted To LowerCase!', "success")
    }
    const handleCapClick = () =>{
        if(text.length > 0){
            let newText = text.toLowerCase();
            const words = newText.split(" ");
            setText(`${words.map(word => {
                return word[0].toUpperCase() + word.substring(1)
            }).join(" ")}`)
            props.showAlert('Conerted To Capitalize!', "success")
        }
    }
    const handleClrClick = () =>{
        setText(``)
        props.showAlert('Text Cleared!', "warning")
    }
    const handleCpClick = () =>{
        var copyText = document.getElementById("myInput");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert('Text Copy to clipboard!', "success")
    }
    const handleRmesClick = () =>{
        const words = text.split(/[ ]+/);
        setText(words.join(" "))
        props.showAlert('Extra Space Removed!', "warning")
    }

    const handleOnChange = (e) =>{
        const newText = e.target.value
        setText(newText);
    }
    const wordCount = () =>{
        if(text == " " || text == "  "){
            return 0;
        }
        else if(text.length <= 1){
            return text.length;
        }
        else{
            return text.split(/[ ]+/).length;
        }
    }

    const [text, setText ] = useState('')

    return (
        <div className='mt-5 pt-3'>
            <div className="container px-5 mb-3">
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`} id="myInput" value={text} rows="8" onChange={handleOnChange} placeholder='Enter Your Text'></textarea>
                </div>
                <div className={`btn btn-${props.mode === 'light'?'primary': props.mode} m-1`} onClick={handleUpClick}>UpperCase</div>
                <div className={`btn btn-${props.mode === 'light'?'primary': props.mode} m-1`} onClick={handleLoClick}>LowerCase</div>
                <div className={`btn btn-${props.mode === 'light'?'primary': props.mode} m-1`} onClick={handleCapClick}>Capitalize</div>
                <div className={`btn btn-${props.mode === 'light'?'primary': props.mode} m-1`} onClick={handleRmesClick}>Remove Extra Spaces</div>
                <div className={`btn btn-${props.mode === 'light'?'primary': props.mode} m-1`} onClick={handleCpClick}>Copy Text</div>
                <div className={`btn btn-${props.mode === 'light'?'primary': props.mode} m-1`} onClick={handleClrClick}>Clear Text</div>
            </div>
            <div className="container px-5 mb-3">
                <h3>Your Text Summary</h3>
                <p>{wordCount()} Words and {text.length} Characters</p>
                <p>{0.005 * wordCount()} Minute to Read</p>
            </div>
        </div>
    )
}
