import React, { useEffect, useRef } from 'react';

function MeetingComponent() {
  const localVideoRef = useRef(null);
  let localStream = null;

  useEffect(() => {
    async function getMedia() {
      try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

        if (localVideoRef.current) {
          localVideoRef.current.srcObject = localStream;
        }
      } catch (error) {
        console.error('Error accessing media:', error);
      }
    }

    getMedia();

  }, []);

  return (
    <div>
      <h1>MEETING AREA</h1>
      <video ref={localVideoRef} autoPlay muted />
    </div>
  );
}

export default MeetingComponent;
