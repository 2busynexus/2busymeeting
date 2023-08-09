import React, {useState, useEffect} from "react";

function CreateButton() {

    const [room, setRoom] = useState('')

    useEffect(() => {
        fetch('/create')
        .then(responese => responese.json())
        .then(data => setRoom(data))
        .catch((error) => {
            console.error('Error while creating room:', error)
          })
    })

    const handleCreate = () => {
        //alert("CREATE")
        console.log(room)
    }

    return (
        <button className='btn btn-primary' onClick={handleCreate}>Create Meeting</button>
    )

}

export default CreateButton