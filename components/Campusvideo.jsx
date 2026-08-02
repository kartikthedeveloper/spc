export default function VideoPlayer() {
  return (
    <div className="mx-auto mt-10 max-w-7xl rounded-xl overflow-hidden">
      <div className="text-center">

        <h2 className="text-4xl font-bold text-indigo-700">
          Campus Video
        </h2>

        <p className="mt-4 mb-10 text-gray-600">
          A glimpse of our learning environment.
        </p>

      </div>
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