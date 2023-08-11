import React, {useState, useEffect} from "react";

function LeaveMeetingButton({userName}) {

    const leaveBtn = () => {
        console.log('Left meeting')
        try {
            fetch('/leave_room', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: userName })
              })
              .then(response => response.json())
              .then(data => console.log(data))
        } catch (error) {
            console.error("Error while leaving room:", error)
        }
    }


    return (
        <button onClick={leaveBtn}>Leave</button>
    )

}

export default LeaveMeetingButton

