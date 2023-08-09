import React, {useState} from 'react'
import JoinButton from './elements/JoinButton'
import CreateButton from './elements/CreateButton'
import JoinForm from './elements/JoinForm'

function WelcomeComponent() {

    const [joinContainer, setJoinContainer] = useState(false)

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
                        <JoinButton onJoinClick={handleJoinContainer}/>
                        <CreateButton />
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default WelcomeComponent