import React, {useState, useEffect} from "react";

function CreateButton() {

    const [room, setRoom] = useState('')

    const handleCreateBtn = () => {
        fetch('/create')
        .then(responese => responese.json())
        .then(data => {
            setRoom(data)
        })
        .catch((error) => {
            console.error('Error while creating room:', error)
            })
        //alert("CREATE")
    }

    // Log the room value after it has been updated
    useEffect(() => {
        console.log(room)
    }, [room])

    return (
        <button className='btn btn-primary' onClick={handleCreateBtn}>Create Meeting</button>
    )

}

export default CreateButton