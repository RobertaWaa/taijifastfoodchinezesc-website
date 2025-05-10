
import { useRef, useEffect } from "react";
import posterImg from "@/assets/creveti-cu-sos.jpg";
import videoSrc from "@/assets/videoPromo.mp4";



const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Acest efect asigură că videoclipul rulează continuu
    if (videoRef.current) {
      const handlePlay = () => {
        console.log("Video playing successfully");
      };

      const handleError = (error: any) => {
        console.error("Video playback error:", error);
      };

      const handleEnded = () => {
        if (videoRef.current) {
          videoRef.current.play().catch(e => console.log("Replay prevented", e));
        }
      };

      videoRef.current.addEventListener("play", handlePlay);
      videoRef.current.addEventListener("error", handleError);
      videoRef.current.addEventListener("ended", handleEnded);

      // Try to play the video if it's not already playing
      if (videoRef.current.paused) {
        videoRef.current.play().catch(error => {
          console.error("Auto-play was prevented:", error);
        });
      }

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("play", handlePlay);
          videoRef.current.removeEventListener("error", handleError);
          videoRef.current.removeEventListener("ended", handleEnded);
        }
      };
    }
  }, []);

  return (
    <section className="py-16 bg-chinese-red">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-white mb-10">
          Bucătărie chinezească autentică
        </h2>
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl rounded-lg overflow-hidden border-4 border-chinese-gold shadow-[0_0_30px_rgba(255,215,0,0.3)]">
            <video
              ref={videoRef}
              className="w-full h-[500px] sm:h-[600px] lg:h-[700px] object-cover object-center"
              muted
              loop
              playsInline
              autoPlay
              poster={posterImg}
            >
              <source src={videoSrc} type="video/mp4" />
              Browserul dvs. nu suportă tag-ul video.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
