import Video from "app/components/video";

export default function Page() {
  return (
    <main>
      <div className="flex flex-col gap-y-12 mb-5">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium mb-4">Miguela</h2>
          <p className="text-zinc-700 text-lg mb-6">
            Miguela is an emerging music artist known for her unique style and captivating
            performances. The website serves as her primary digital platform for engaging
            with fans, showcasing her music, videos, merchandise, and upcoming events.
          </p>
        </div>
        <figure>
          <img src="/677shots_so.png" alt="Miguela Website" />
          <figcaption className="text-center text-sm mt-2">
            The homepage of Silly's website features a collage-style layout that reflects
            her artistic journey, guiding users to explore music, videos, and other
            content.
          </figcaption>
        </figure>
        <div className="max-w-2xl">
          <h3 className="text-3xl font-medium mb-3">Discovering the need</h3>
          <p className="text-zinc-700 text-lg">
            I was responsible for the complete design and development of Miguela’s
            official website, ensuring a seamless user experience and an aesthetically
            pleasing interface that aligns with Miguela’s artistic vision.
          </p>
          <p className="text-zinc-700 text-lg mt-6">
            I was responsible for the complete design and development of Miguela’s
            official website, ensuring a seamless user experience and an aesthetically
            pleasing interface that aligns with Miguela’s artistic vision.
          </p>
        </div>
        <img src="/needs.png" alt="User needs post-its" />
        <div className="max-w-2xl">
          <h3 className="text-3xl font-medium mb-3">Role</h3>
          <p className="text-zinc-700 text-lg mb-6">
            I was responsible for the complete design and development of Miguela’s
            official website, ensuring a seamless user experience and an aesthetically
            pleasing interface that aligns with Miguela’s artistic vision.
          </p>
        </div>
        <div className="max-w-2xl">
          <h3 className="text-3xl font-medium mb-3">Background</h3>
          <p className="text-zinc-700 text-lg mb-6">
            With Miguela's growing popularity, the need for a professional online presence
            became paramount. The website was designed to reflect her brand identity while
            providing fans with easy access to her content and merchandise.
          </p>
        </div>
        <div className="max-w-2xl">
          <h3 className="text-3xl font-medium mb-3">Challenge</h3>
          <p className="text-zinc-700 text-lg mb-6">
            The primary challenge was to create a site that not only highlighted Miguela's
            artistic persona but also functioned as an e-commerce platform and a
            multimedia hub. Balancing aesthetic appeal with functionality was crucial to
            meet the diverse needs of her audience.
          </p>
        </div>
        <div className="max-w-2xl">
          <h3 className="text-3xl font-medium mb-3">Solution</h3>
          <p className="text-zinc-700 text-lg mb-6">
            I developed a responsive, visually striking website with an intuitive
            navigation system. Using modern design principles and robust backend
            technologies, the site seamlessly integrates music streaming, video content,
            and a user-friendly online store. The design reflects Miguela’s artistic style
            while providing fans with an engaging and immersive experience.
          </p>
        </div>
        <Video />
        <div className="max-w-2xl">
          <h3 className="text-3xl font-medium mb-3">Features</h3>
          <ul className="list-disc list-inside text-zinc-700 text-lg">
            <li>Music & Videos: Integrated streaming and video playback.</li>
            <li>
              Merchandise Store: E-commerce setup with easy navigation and purchasing
              options.
            </li>
            <li>Event Listings: Dynamic updates for upcoming concerts and events.</li>
            <li>Responsive Design: Optimized for both desktop and mobile users.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
