import React, { useState } from "react";

function CreateMeetingButton({setRoomId}) {

    const [activeBtn, setActiveBtn] = useState(true)
    const [btnClass, setBtnClass] = useState('btn-primary')

    const handleCreateBtn = () => {
        fetch('/create')
        .then(responese => responese.json())
        .then(data => {
            setRoomId(data)
            //roomId = room
        })
        .catch((error) => {
            console.error('Error while creating room:', error)
            })
        //alert("CREATE")
        setActiveBtn(false)
        setBtnClass('btn-outline-primary')
    }    

    // Log the room value after it has been updated
    //useEffect(() => {
        //roomId = room
        //console.log(`Room state : ${room}`)
        //console.log(`Room Id: ${roomId}`)
    //}, [room])

    return (
        <button 
            className={`btn ${btnClass}`} 
            onClick={handleCreateBtn} 
            disabled={!activeBtn}
            >Create Meeting
        </button>
    )

}

export default CreateMeetingButton