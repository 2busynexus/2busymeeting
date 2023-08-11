
const fetchRoomState = async (roomId) => {
    try {
        const response = await fetch('/check_state', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                roomId: roomId
            })
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching room state: ', error)
        return null
    } 
}

export default fetchRoomState