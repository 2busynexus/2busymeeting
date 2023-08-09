import React from "react";

function CreateButton({setRoomId}) {

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
    }

    // Log the room value after it has been updated
    //useEffect(() => {
        //roomId = room
        //console.log(`Room state : ${room}`)
        //console.log(`Room Id: ${roomId}`)
    //}, [room])

    return (
        <button className='btn btn-primary' onClick={handleCreateBtn}>Create Meeting</button>
    )

}

export default CreateButton