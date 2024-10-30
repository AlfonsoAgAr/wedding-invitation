import { useState, useRef } from "react";
import { Button } from "antd";
import { SoundOutlined, SoundFilled } from "@ant-design/icons";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      <audio ref={audioRef} loop>
        <source src="assets/music.mp3" type="audio/mp3" />
      </audio>
      <Button
        onClick={togglePlay}
        icon={isPlaying ? <SoundFilled /> : <SoundOutlined />}
        style={{ fontSize: "1rem" }}
      >
      </Button>
    </div>
  );
}
