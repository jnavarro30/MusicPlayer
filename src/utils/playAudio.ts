export const playAudio = (isPlaying: boolean, audioRef: any) => {
    if (isPlaying) {
      const playPromise = audioRef.play();
      if (playPromise !== undefined) {
        playPromise
          .then((audio: any) => {
            audioRef.play();
          })
          .catch((error: any) => console.log(error));
      }
    }
  };