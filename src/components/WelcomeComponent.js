import React from 'react'
import JoinButton from './elements/JoinButton'
import CreateButton from './elements/CreateButton'

function WelcomeComponent() {

    return (
        <div className='container d-flex flex-column align-items-center justify-content-center vh-100'>
            <div className='text-bg-dark mb-5 text-center p-5 d-flex flex-column gap-3'>
                <h3>Welcome to</h3>
                <h1>2Busy Meeting</h1>
            </div>
            <div className='border rounded p-5 d-flex flex-column gap-5 text-bg-dark text-center'>
         
                <div className='d-flex flex-column gap-4'>
                    
                    <JoinButton />
                    <CreateButton />

                </div>
            </div>
        </div>
    )
}

export default WelcomeComponent