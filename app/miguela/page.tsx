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
            The homepage of Miguela's website features a collage-style layout that
            reflects her artistic journey, guiding users to explore music, videos, and
            other content.
          </figcaption>
        </figure>
        <div className="max-w-2xl">
          <h3 className="text-3xl font-medium mb-3">Discovering the Need</h3>
          <p className="text-zinc-700 text-lg">
            I was responsible for the complete design and development of Miguela’s
            official website, ensuring a seamless user experience and an aesthetically
            pleasing interface that aligns with Miguela’s artistic vision. This involved
            leveraging tools such as Figma for prototyping and wireframing, as well as
            React.js and Next.js for the development of a responsive, high-performance
            site.
          </p>
          <p className="text-zinc-700 text-lg mt-6">
            The project required a deep understanding of front-end technologies, user
            experience design, and the ability to integrate third-party APIs like Shopify
            for the e-commerce functionality. The result was a visually compelling
            platform that also facilitated seamless transactions and content updates via a
            headless CMS.
          </p>
        </div>
        <img src="/needs.png" alt="User needs post-its" />
        <div className="max-w-2xl">
          <h3 className="text-3xl font-medium mb-3">Role</h3>
          <p className="text-zinc-700 text-lg mb-6">
            In my role as the lead designer and developer, I orchestrated the entire
            project from concept to deployment, collaborating closely with content
            creators and stakeholders. I also implemented performance optimizations,
            including lazy loading and CDN integration, which significantly improved load
            times and user engagement.
          </p>
        </div>
        <div className="max-w-2xl">
          <h3 className="text-3xl font-medium mb-3">Background</h3>
          <p className="text-zinc-700 text-lg mb-6">
            With Miguela's growing popularity, the need for a professional online presence
            became paramount. The website was designed to reflect her brand identity while
            providing fans with easy access to her content and merchandise. This project
            highlighted my ability to balance aesthetic considerations with technical
            requirements, delivering a solution that met both business and user needs.
          </p>
        </div>
        <div className="max-w-2xl">
          <h3 className="text-3xl font-medium mb-3">Challenge</h3>
          <p className="text-zinc-700 text-lg mb-6">
            The primary challenge was to create a site that not only highlighted Miguela's
            artistic persona but also functioned as an e-commerce platform and a
            multimedia hub. Balancing aesthetic appeal with functionality was crucial to
            meet the diverse needs of her audience. I addressed these challenges by
            developing custom components and integrating them with robust backend
            technologies, ensuring a seamless user experience across devices.
          </p>
        </div>
        <div className="max-w-2xl">
          <h3 className="text-3xl font-medium mb-3">Solution</h3>
          <p className="text-zinc-700 text-lg mb-6">
            I developed a responsive, visually striking website with an intuitive
            navigation system. Using modern design principles and robust backend
            technologies like Next.js and Tailwind CSS, the site seamlessly integrates
            music streaming, video content, and a user-friendly online store. The design
            reflects Miguela’s artistic style while providing fans with an engaging and
            immersive experience. Performance metrics showed a 40% increase in user
            engagement and a 25% boost in merchandise sales post-launch.
          </p>
        </div>
        <Video />
        <div className="max-w-2xl">
          <h3 className="text-3xl font-medium mb-3">Features</h3>
          <ul className="list-disc list-inside text-zinc-700 text-lg">
            <li>Music & Videos: Integrated streaming and video playback.</li>
            <li>
              Merchandise Store: E-commerce setup with seamless Shopify API integration
              and easy navigation.
            </li>
            <li>Event Listings: Dynamic updates for upcoming concerts and events.</li>
            <li>
              Responsive Design: Optimized for both desktop and mobile users, ensuring a
              consistent experience.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
