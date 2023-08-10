import { useNavigate } from "react-router-dom"

function ContinueButton(props) {

    const navigate = useNavigate()

    const handleContinueBtn = () => {
        //console.log(roomId)
        //console.log('You are now entering your meeting')
        navigate(`/meeting/${props.roomId}`)
    }

    return (
        <button className='btn btn-warning' onClick={handleContinueBtn}>Continue to meeting</button>
    )

}

export default ContinueButton