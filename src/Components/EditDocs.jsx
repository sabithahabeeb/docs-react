import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
import './docs.css'

function EditDocs({ database }) {
    const isMounted = useRef()
    const collectionRef = collection(database, 'docsData')
    const [documentTitle, setDocumentTitle] = useState('')
    const [docsDesc, setdocsDesc] = useState('')
    const parms = useParams()
    // console.log(parms);

    const getQuillData = (value) => {
        setdocsDesc(value)
        // console.log(value);

    }
    useEffect(() => {
        const updateDocsData = setTimeout(() => {
            const document = doc(collectionRef, parms.id)
            updateDoc(document, {
                docsDesc: docsDesc
            })
                .then(() => {
                    // alert('saved')
                })
                .catch(() => {
                    // alert('Cannot saved')
                })

        }, 1000)
        return () => clearTimeout(updateDocsData)
    }, [docsDesc])

    const getData = () => {
        const document = doc(collectionRef, parms.id)
        onSnapshot(document, (docs) => {
            setDocumentTitle(docs.data().title)
            setdocsDesc(docs.data().docsDesc)
        })

    }

    useEffect(() => {
        if (isMounted.current) {
            return
        }
        isMounted.current = true
        getData()
    }, [])
    return (
        <div className='editDocs-main' style={{ marginRight: '50px', marginLeft: '50px', marginTop: '50px' }} >
            <h1 style={{ marginBottom: '30px' }}>{documentTitle}</h1>
            <div className='editDocs-inner'>
                <ReactQuill className='react-quill' value={docsDesc} onChange={getQuillData} />
            </div>
        </div>
    )
}

export default EditDocs