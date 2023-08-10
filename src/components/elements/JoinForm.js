import { useState } from "react"
import { useNavigate } from 'react-router-dom'


function JoinForm({onBackClick}) {

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [roomId, setRoomId] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleJoinSubmit = async (event) => {
        event.preventDefault()
        //console.log('I joined a room')
        if (!name || !roomId) {
            //console.log('required')
            setErrorMessage('All fields required!')
            return
        }
        try {
            const response = await fetch('/join', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    roomId: roomId
                })
            })
            const data = await response.json();
            setErrorMessage(data)
            navigate(`/meeting/${roomId}`)
            //timeout 5s and redirecting to meeting room
        } catch (error) {
            console.error('Error joining room:', error)
        }
    }

    const handleBackBtn = () => {
        console.log("Back to main page")
        onBackClick()
    }


    return (
        <>
        <form className="my-5" onSubmit={handleJoinSubmit}>
            <div className="d-flex flex-column my-2 gap-2"> 
                <label htmlFor="memberName">Your Name:</label>
                <input 
                    type="text" 
                    id="memberName"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="d-flex flex-column my-2 gap-2">
            <label htmlFor="roomId">Room ID:</label>
            <input 
                    type="text" 
                    id="roomId"
                    value={roomId}
                    onChange={(e)=>setRoomId(e.target.value)}
                />
            </div>

            <button type="submit" className="btn btn-warning my-3">Join</button>
            {errorMessage && <h4 className="text-danger">{errorMessage}</h4>}
        </form> 
        <button className="btn btn-danger" onClick={handleBackBtn}>Back</button>
        
        </>
    )
}

export default JoinForm