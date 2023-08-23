import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import LeaveMeetingButton from "../components/elements/LeaveMeetingButton"
import fetchRoomState from "../components/functions/fetchRoomState"
import MeetingComponent from "../components/MeetingComponent"


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
        <>
        { roomIdServer === roomId ? 
                <div className='d-flex flex-column py-5 align-items-center justify-content-center text-bg-dark vh-100'>
                        <>
                            <h1>Welcome to your meeting page</h1>
                            <h3>The ID for this room is {roomId}</h3>
                            <MeetingComponent/>
                            <LeaveMeetingButton />

                        </>
                </div>
                
            : 
            <div className="d-flex align-items-center justify-content-center text-bg-dark vh-100">
                <div className="d-flex flex-column align-items-center gap-5">
                    <h1>Room doesn't exist</h1>
                    <button className="btn btn-primary" onClick={handleBackBtn}>Back</button>
                </div>
            </div> }
        </>
        
    );
}

export default Meeting
