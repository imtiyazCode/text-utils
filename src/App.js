import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const toggleMode =(setmode) =>{
    if(setmode == 'light'){
      setMode("dark")
      document.body.style.backgroundColor="#2f3439"
      document.body.style.color="white"
      showAlert('DarkMode Enabled','success')
    }
    if(setmode == 'dark'){
      setMode("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert('DarkMode Disabled','success')
    }
    if(setmode == 'warning'){
      setMode("warning")
      document.body.style.backgroundColor="#262513"
      document.body.style.color="white"
      // showAlert('DarkMode Disabled','success')
    }
    if(setmode == 'danger'){
      setMode("danger")
      document.body.style.backgroundColor="#261313"
      document.body.style.color="white"
      // showAlert('DarkMode Disabled','success')
    }
    if(setmode == 'info'){
      setMode("info")
      document.body.style.backgroundColor="#131e26"
      document.body.style.color="white"
      // showAlert('DarkMode Disabled','success')
    }
    if(setmode == 'success'){
      setMode("success")
      document.body.style.backgroundColor="#09180d"
      document.body.style.color="white"
      // showAlert('DarkMode Disabled','success')
    }
  }

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);

  }

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  return (
    <>
      <Navbar title={"Text Utils"} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <TextForm heading={"Enter the text to analyze"} mode={mode} showAlert= {showAlert} />
    </>
  )
}

export default App;
