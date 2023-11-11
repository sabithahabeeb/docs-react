import React, { useState } from 'react'
import './docs.css'
import Mod from './Mod';


function Docs({database}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [newtitle,setTitle] = useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const toggleMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  return (
   <>
     
      <div className={isDarkMode?'docs-main dark-mode':'light-mode docs-main'}>
      <div className='toggle'>
      <button onClick={toggleMode} style={{width:'10px',height:'10px',backgroundColor:'transparent'}}>
            {isDarkMode ? <i className="fa-solid fa-sun  fa-xl " style={{color:'yellow'}}></i> :  <i className="fa-solid fa-moon  fa-xl " style={{color:'black'}}></i>}
          </button>
      </div>
          <h1>Docs</h1>
          <button onClick={handleOpen} className='add-document'>
              Add a Document
          </button>
          <Mod open={open} setOpen={setOpen} setTitle={setTitle}  newtitle={newtitle}/>
      </div>
   </>
  )
}

export default Docs

// docs-main