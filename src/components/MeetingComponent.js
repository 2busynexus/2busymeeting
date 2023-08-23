import React, { useEffect, useRef } from 'react';

function MeetingComponent() {
  const localVideoRef = useRef(null);
  const localStreamRef = useRef(null); // Use useRef for the mutable value

  useEffect(() => {
    async function getMedia() {
      try {
        localStreamRef.current = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

        if (localVideoRef.current) {
          localVideoRef.current.srcObject = localStreamRef.current;
        }
      } catch (error) {
        console.error('Error accessing media:', error);
      }
    }

    getMedia();
  }, []);

  useEffect(() => {
    // Cleanup function
    return () => {
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach(track => {
          track.stop();
        });
      }
    };
  }, []);

  return (
    <div>
      <h1>MEETING AREA</h1>
      <video ref={localVideoRef} autoPlay muted />
    </div>
  );
}

export default MeetingComponent;
