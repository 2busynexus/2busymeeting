import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

function Meeting() {

    const { roomId } = useParams()
    const [roomIdServer, setRoomIdServer] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/check_state', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                roomId: roomId
            })
        })
        .then(response => response.json())
        .then(data => setRoomIdServer(data))
    }, [roomId]) // Empty dependency array, runs only once

    const handleBackBtn = () => {
        navigate('/')
    }

    return (
        <div className='d-flex flex-column align-items-center justify-content-center vh-100 text-bg-dark'>
            { roomIdServer === roomId ? 
                <>
                    <h1>MEETING PAGE</h1>
                    <h3>{roomId}</h3>
                </>
            : <div className="d-flex flex-column align-items-center gap-5">
                <h1>Room doesn't exist</h1>
                <button className="btn btn-primary" onClick={handleBackBtn}>Back</button>
            </div> }
        </div>
    );
}

export default Meeting
