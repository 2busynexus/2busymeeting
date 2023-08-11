import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import LeaveMeetingButton from "../components/elements/LeaveMeetingButton"
import fetchRoomState from "../components/functions/fetchRoomState"

function Meeting() {

    const { roomId } = useParams()
    const [roomIdServer, setRoomIdServer] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        //function for checking if the user is closing the tab/window
        const handleBeforeUnload = () => {
            fetch("/leave_room", { method: "POST" });
          };
        window.addEventListener("beforeunload", handleBeforeUnload);
        //function for checking if the room is still active on the server
        fetchRoomState(roomId).then(data => setRoomIdServer(data))
        const checkInterval = setInterval(() => {
            fetchRoomState(roomId).then(data => setRoomIdServer(data))
        }, 30000);
        return () => {
            clearInterval(checkInterval)
        }
    }, [roomId])

    const handleBackBtn = () => {
        navigate('/')
    }

    return (
        <div className='d-flex flex-column align-items-center justify-content-center vh-100 text-bg-dark'>
            { roomIdServer === roomId ? 
                <>
                    <h1>MEETING PAGE</h1>
                    <h3>{roomId}</h3>
                    <LeaveMeetingButton />
                </>
            : <div className="d-flex flex-column align-items-center gap-5">
                <h1>Room doesn't exist</h1>
                <button className="btn btn-primary" onClick={handleBackBtn}>Back</button>
            </div> }
        </div>
    );
}

export default Meeting
