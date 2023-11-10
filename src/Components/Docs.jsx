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
      <div className='toggle'>
      <button onClick={toggleMode} style={{width:'10px',height:'10px',backgroundColor:'transparent'}}>
            {isDarkMode ? <i class="fa-solid fa-sun  fa-xl " style={{color:'white'}}></i> :  <i class="fa-solid fa-moon  fa-xl " style={{color:''}}></i>}
          </button>
      </div>
      <div className={isDarkMode?'docs-main dark-mode':'light-mode docs-main'}>
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