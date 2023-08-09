
function ContinueButton() {

    const handleContinueBtn = () => {
        console.log('You are now entering your meeting')
    }

    return (
        <button className='btn btn-warning' onClick={handleContinueBtn}>Continue to meeting</button>
    )

}

export default ContinueButton