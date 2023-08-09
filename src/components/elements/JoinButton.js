import React, {useState, useEffect} from "react";

function JoinButton({onJoinClick}) {

    const [room, setRoom] = useState('')
    

    useEffect(() => {
        fetch('/join')
        .then(responese => responese.json())
        .then(data => setRoom(data))
        .catch((error) => {
            console.error('Error while joining room:', error)
          })
    })

    const handleJoinBtn = () => {
        //alert("JOIN")
        console.log(room)
        onJoinClick()
    }

    

    return (
        <>
        <button className='btn btn-primary' onClick={handleJoinBtn}>Join Meeting</button>
        </>
    )

}

export default JoinButton