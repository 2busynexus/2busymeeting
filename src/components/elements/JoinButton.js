import React, {useState, useEffect} from "react";

function JoinButton() {

    const [room, setRoom] = useState('')

    useEffect(() => {
        fetch('/join')
        .then(responese => responese.json())
        .then(data => setRoom(data))
        .catch((error) => {
            console.error('Error while joining room:', error)
          })
    })

    const handleJoin = () => {
        //alert("JOIN")
        console.log(room)
    }

    return (
        <button className='btn btn-primary' onClick={handleJoin}>Join Meeting</button>
    )

}

export default JoinButton