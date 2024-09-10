import WorkArticle from "app/components/workArticles";

const navItems = [
  {
    title: "Miguela",
    description:
      "Designed and developed of miguela.pt website, prioritizing user experience, responsive design, and seamless functionality. Ensured project alignment with brand vision and goals, resulting in improved user engagement, conversion rates, and increased client inquiries within six months post-launch.",
    imgSrc: "/677shots_so.png",
    link: "/miguela",
  },
];

export default function Page() {
  return (
    <main>
      {/*
      <img src="/simaoprofile.png" className="rounded-full w-20 h-20" />
      */}
      <div className="max-w-2xl mt-4">
        <p className="text-xl text-zinc-600">
          Hey there! I'm a Product Designer over at Altice Labs. My main focus is on
          building and managing solid design systems that make sure our B2B products are
          consistent and easy to use. I love what I do because I get to mix creativity
          with tech skills to make digital experiences better for users.
        </p>
        <p className="text-xl text-zinc-600 mt-4">
          You can find me trying out new recipes, going for runs, or just chilling with a
          good movie.
        </p>
      </div>
      {navItems.map((el) => (
        <section className="mt-20">
          <WorkArticle {...el} />
        </section>
      ))}
    </main>
  );
}
