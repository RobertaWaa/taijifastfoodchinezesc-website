
import { useRef, useEffect } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Acest efect asigură că videoclipul rulează continuu
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Auto-play was prevented:", error);
      });

      const handleEnded = () => {
        if (videoRef.current) {
          videoRef.current.play().catch(e => console.log("Replay prevented", e));
        }
      };

      videoRef.current.addEventListener("ended", handleEnded);

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("ended", handleEnded);
        }
      };
    }
  }, []);

  return (
    <section className="py-16 bg-chinese-red">
      <div className="container mx-auto px-4">
        <h2 className="text-center section-heading mx-auto text-white mb-10">
          Bucătărie chinezească autentică
        </h2>
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden">
            {/* Pentru un videoclip demonstrativ, vom folosi un videoclip de pe Pexels sau va fi înlocuit ulterior */}
            <video
              ref={videoRef}
              className="w-full h-auto"
              muted
              loop
              playsInline
              poster="https://images.pexels.com/photos/6645917/pexels-photo-6645917.jpeg"
            >
              <source
                src="https://player.vimeo.com/external/414980767.hd.mp4?s=9e8040c6af22b16cf9b59a28a3e6b607a547b57b&profile_id=175&oauth2_token_id=57447761"
                type="video/mp4"
              />
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
