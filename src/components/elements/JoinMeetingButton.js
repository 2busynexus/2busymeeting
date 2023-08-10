import React from "react";

function JoinMeetingButton({onJoinClick}) {


    

    const handleJoinBtn = () => {
        //alert("JOIN")
        onJoinClick()
    }

    

    return (
        <>
        <button className='btn btn-primary' onClick={handleJoinBtn}>Join Meeting</button>
        </>
    )

}

export default JoinMeetingButton