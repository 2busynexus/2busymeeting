import React, {useState, useEffect} from "react";

function LeaveMeetingButton() {

    const leaveBtn = () => console.log('Left meeting')

    return (
        <button onClick={leaveBtn}>Leave</button>
    )

}

export default LeaveMeetingButton

