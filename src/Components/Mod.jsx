import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './docs.css'
import { addDoc, collection ,onSnapshot} from 'firebase/firestore';
import { database } from './firebaseConfig';
import { useNavigate, useParams } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Mod({open,setOpen,setTitle,newtitle}) {
  
    const navigate = useNavigate()
    const [docsData,setDocsData] = useState([])
    const isMounted = useRef()
    const collectionRef = collection(database, 'docsData')

    const handleClose = () => setOpen(false);

    const addData = ()=>{
        // console.log(`newtitle: ${newtitle}`);
        addDoc(collectionRef,{
            title: newtitle,
            docsDesc:""
        })
        .then(()=>{
            alert('data Added')
            handleClose()
        })
        .catch((error)=>{
            alert('Cannot add data')
            // console.log(error);
        })

    }

    const getData = ()=>{
        onSnapshot(collectionRef,(data)=>{
            setDocsData(data.docs.map((doc)=>{
                return{...doc.data(),id: doc.id}
            }))
        })
    }
    useEffect(()=>{
       if(isMounted.current){
        return
       }
       isMounted.current = true
       getData()
    },[])

    const getId = (id)=>{
      navigate(`/editdoc/${id}`)

    }
  return (
    <>

<div className='grid-main'>
        {
            docsData?.map((doc)=>{
                return(
               <>
                     
                        <div className='grid-child' >
                       <div className='fonts'>
                            <i class="fa-brands fa-dochub" onClick={()=>getId(doc.id)} ></i>
                            <i className="fa-solid fa-trash"></i>
                       </div>
                            <p>{doc.title}</p>
                            <div dangerouslySetInnerHTML={{__html: doc.docsDesc}} />
                            
                        </div>
               </>
                )
            })
        }
         
</div>    <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <input value={newtitle} onChange={(e)=>setTitle(e.target.value)} className='add-input' type="text" placeholder='Add the Title'/>
                    <div>
                        <button onClick={addData}  className='add-docs'>Add</button>
                    </div>

                </Box>
            </Modal>
    </>
  )
}

export default Mod