import React from "react";

function JoinButton({onJoinClick}) {


    

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

export default JoinButton