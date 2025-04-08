import WorkArticle from "app/components/workArticles";

const navItems = [
  {
    title: "Planview",
    description:
      "Led the development of a user-friendly SaaS platform for employees to log their hours across tasks. The application simplifies timesheet management with an intuitive interface, real-time tracking, and easy reporting, making it efficient and straightforward for users.",
    imgSrc: "/planview.png",
    link: "",
  },
  {
    title: "Miguela",
    description: (
      <>
        "Designed and developed of miguela.pt website, prioritizing user
        experience, responsive design, and seamless functionality. Ensured
        project alignment with brand vision and goals, resulting in improved
        user engagement, conversion rates, and increased client inquiries within
        six months post-launch."Visit{" "}
        <a
          href="https://miguela.pt"
          className="underline hover:text-blue-500 transition-colors"
        >
          miguela.pt
        </a>{" "}
        to explore more.
      </>
    ),
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
      <div className="max-w-2xl mt-4 mb-2">
        <p className="text-xl text-zinc-600">
          Hey there! I'm a Frontend Engineer. I focus on building clean,
          efficient, and scalable interfaces that bring products to life. I'm
          passionate about turning complex problems into smooth, user-friendly
          experiences using modern web technologies.
        </p>
        <p className="text-xl text-zinc-600 mt-4">
          You can find me trying out new recipes, going for runs, or just
          chilling with a good movie.
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
