import { useEffect, useState } from 'react'

const StatusComponent = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    fetch('/ping')
      .then((response) => response.json())
      .then((flask) => {
        setData(flask)
        //console.log(flask)
      })
      .catch((error) => {
        console.error('Error fetching Flask status:', error)
      })
  }, [])

  return (
    console.log(data)
  )
}

export default StatusComponent
