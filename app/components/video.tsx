export default function Video() {
  return (
    <video
      width="320"
      height="240"
      autoPlay
      loop
      playsInline
      style={{ cursor: "auto", width: "100%" }}
    >
      <source src="/miguela_items.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
