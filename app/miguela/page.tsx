import Video from "app/components/video";

export default function Page() {
  return (
    <main>
      <div className="flex flex-col gap-y-12 mb-5 px-2">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium mb-4">Miguela</h2>
          <p className="text-zinc-700 text-lg mb-6">
            Silly is an emerging music artist celebrated for her distinctive style and
            captivating performances. Her website serves as the primary digital hub for
            sharing her debut studio album <em>Miguela</em>, connecting with fans, and
            showcasing her videos, merchandise, and upcoming events. Visit{" "}
            <a
              href="https://miguela.pt"
              className="underline hover:text-emerald-500 transition-colors"
            >
              miguela.pt
            </a>{" "}
            to learn more.
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
          <h3 className="text-3xl font-medium mb-3">Background</h3>
          <p className="text-zinc-700 text-lg mb-6">
            With Silly's growing popularity, the need for a professional online presence
            became paramount. The website was designed to reflect her brand identity while
            providing fans with easy access to her content and merchandise. This project
            highlighted my ability to balance aesthetic considerations with technical
            requirements, delivering a solution that met both business and user needs.
          </p>
        </div>
        <div className="max-w-2xl">
          <h3 className="text-3xl font-medium mb-3">Discovering the need</h3>
          <p className="text-zinc-700 text-lg mt-6">
            The core needs of the project became evident through a detailed analysis of
            the goals and desires of the artist and her fanbase, as depicted in the
            visualized user needs. The focus was on unveiling the album creation process,
            offering exclusive access to content like lyrics and behind-the-scenes
            footage, and sharing the artist's journey in an engaging manner. Additionally,
            the platform had to promote concerts, provide access to music videos, and
            seamlessly link to various streaming platforms. To encapsulate the artistic
            essence, a collage-style layout was chosen, creating a visually compelling
            space that also supports merchandise sales, thus merging aesthetic appeal with
            practical functionality.
          </p>
        </div>
        <img src="/needs.png" alt="User needs post-its" />
        <div className="max-w-2xl">
          <h3 className="text-3xl font-medium mb-3">Interactive content board</h3>
          <p className="text-zinc-700 text-lg mb-6">
            <p className="text-zinc-700 text-lg mt-6">
              As the project evolved, the concept of a custom digital board featuring
              Silly's content came to life. This board is uniquely designed to adapt to
              individual users, offering the flexibility to rearrange elements through an
              intuitive drag-and-drop interface.
            </p>
          </p>
        </div>
        <Video />
        <figure>
          <img src="/drag.png" alt="Miguela Website" />
          <figcaption className="text-center text-sm mt-2">
            All items on the main page are draggable.
          </figcaption>
        </figure>
        <div className="max-w-2xl">
          <h3 className="text-3xl font-medium mb-3">Tailored for the user</h3>
          <p className="text-zinc-700 text-lg mb-6">
            The digital board is meticulously designed to be tailored for each individual
            user. It offers the flexibility to adjust the screen layout according to
            personal preferences, allowing users to customize the positioning of elements
            in a way that resonates most with them. This level of personalization ensures
            that every interaction with the board feels unique and aligned with the user’s
            style, enhancing both the usability and the overall experience.
          </p>
        </div>
        <figure>
          <img src="/765shots_so.png" alt="Two screens" />
          <figcaption className="text-center text-sm mt-2">
            Two of the infinite layout options for the main page.
          </figcaption>
        </figure>
        <div className="max-w-2xl">
          <h3 className="text-3xl font-medium mb-3">Outcome</h3>
          <p className="text-zinc-700 text-lg mb-6">
            The solution delivered a visually compelling and user-friendly platform but
            also successfully met Silly's needs for a robust online presence. The
            website's engaging design and seamless functionality resulted in a significant
            increase in fan engagement, with users spending more time exploring the
            content and interacting with the custom digital board. Additionally, the
            integration of e-commerce features allowed for a smooth transaction process,
            leading to an uptick in merchandise sales. Overall, the project has been
            well-received by both the artist and her fanbase, solidifying Silly's brand in
            the digital space.
          </p>
        </div>
      </div>
    </main>
  );
}
