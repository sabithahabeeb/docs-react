import React, { useState } from 'react'
import './docs.css'
import Mod from './Mod';


function Docs({database}) {
  const [newtitle,setTitle] = useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
  return (
    <div className='docs-main'>
        <h1>Docs</h1>
        <button onClick={handleOpen} className='add-document'>
            Add a Document
        </button>
        <Mod open={open} setOpen={setOpen} setTitle={setTitle}  newtitle={newtitle}/>
    </div>
  )
}

export default Docs