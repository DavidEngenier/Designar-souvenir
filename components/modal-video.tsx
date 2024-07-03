"use client"
import React, { useRef, useEffect, useState } from "react";

interface ModalVideoProps {
  video: string; // Ruta del archivo de video
  videoWidth: number; // Ancho del video
  videoHeight: number; // Altura del video
}

const ModalVideo: React.FC<ModalVideoProps> = ({
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null); // Referencia al elemento de video para acceder a él
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5; // Establecer el volumen del video (opcional)
    }

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space" && videoRef.current) {
        togglePlay();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    const progressBar = document.getElementById("progress-bar");
    if (videoRef.current && progressBar) {
      const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      progressBar.style.width = `${percentage}%`;
    }
  };

  return (
    <div className="flex justify-center items-center relative">
      <div className="relative w-full max-w-6xl" data-aos="fade-up" data-aos-delay="200">
        <video
          ref={videoRef}
          width={videoWidth}
          height={videoHeight}
          autoPlay // Inicia la reproducción automáticamente
          loop // Repite el video
          className="rounded-lg w-full h-full object-cover p-6"
          onTimeUpdate={handleTimeUpdate} // Actualiza la barra de progreso
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Barra de progreso personalizada */}
        <div className="w-full h-1 bg-gray-300 absolute bottom-0 left-0">
          <div id="progress-bar" className="h-full bg-blue-500" style={{ width: "0%" }}></div>
        </div>
        {/* Botón de reproducción/pausa */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button className="w-14 h-14 cursor-pointer flex items-center justify-center" onClick={togglePlay}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-10 w-10 ${isPlaying ? 'text-black' : 'text-white'}`}
              fill="none"
              viewBox="0 0 84 4"
              stroke="currentColor"
            >
              {isPlaying ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalVideo;
