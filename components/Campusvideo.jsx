export default function VideoPlayer() {
  return (
    <div className="mx-auto mt-10 max-w-7xl rounded-xl overflow-hidden">
      <video
        className="w-full rounded-xl"
        // controls
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/video-thumbnail.webp"
      >
        <source src="/video/success-point-sikar-campus.mp4" type="video/mp4" />

        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}