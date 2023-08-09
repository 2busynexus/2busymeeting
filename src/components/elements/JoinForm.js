

function JoinForm({onBackClick}) {

    const handleJoinSubmit = (event) => {
        event.preventDefault()
        console.log('I joined a room')
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
                <input type="text" id="memberName"/>
            </div>
            <div className="d-flex flex-column my-2 gap-2">
            <label htmlFor="roomId">Room ID:</label>
            <input type="text" id="roomId"/>
            </div>

            <button type="submit" className="btn btn-warning">Join</button>
    
        </form> 
        <button className="btn btn-danger" onClick={handleBackBtn}>Back</button>
        
        </>
    )
}

export default JoinForm