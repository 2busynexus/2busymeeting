import React, {useState} from 'react'
import JoinMeetingButton from '../components/elements/JoinMeetingButton'
import CreateMeetingButton from '../components/elements/CreateMeetingButton'
import JoinForm from '../components/elements/JoinForm'
import ContinueButton from '../components/elements/ContinueButton'

function Home() {

    const [joinContainer, setJoinContainer] = useState(false)
    const [roomId, setRoomId] = useState('')

    const handleJoinContainer = () => {
        setJoinContainer(!joinContainer)
    }

    

    return (
        <div className='container d-flex flex-column align-items-center justify-content-center vh-100'>
            <div className='text-bg-dark mb-5 text-center pb-5 d-flex flex-column gap-3'>
                <h3>Welcome to</h3>
                <h1>2Busy Meeting</h1>
            </div>
            <div className='border rounded p-5 mb-5 d-flex flex-column gap-5 text-bg-dark text-center'>
         
                <div className='d-flex flex-column gap-4'>
                    
                    
                    { joinContainer ? 
                        <JoinForm onBackClick={handleJoinContainer}/> 
                        : 
                        <>
                        <JoinMeetingButton onJoinClick={handleJoinContainer}/>
                        <CreateMeetingButton setRoomId={setRoomId}/>
                        </>
                    }
                </div>
            </div>
            
            {
                roomId && !joinContainer &&
                <div className='d-flex flex-column my-2 gap-3 align-items-center'>
                    <h3 className='text-bg-dark'>Your room ID : {roomId}</h3>
                    <ContinueButton roomId = {roomId}/>
                </div>
            }
            
        </div>
    )
}

export default Home