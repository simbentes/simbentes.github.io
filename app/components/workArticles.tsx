import Image from "next/image";
import Link from "next/link";

export default function WorkArticle({ title, description, imgSrc, link }) {
  return (
    <article className="pt-12 pb-6">
      <div className="mb-5">
        <h2 className="text-4xl font-medium mb-4">{title}</h2>
        <div className="flex flex-col md:flex-row items-end md:items-center gap-y-4 justify-between">
          <p className="text-xl text-zinc-600 max-w-2xl">{description}</p>
          {link !== "" ? (
            <Link
              href={link}
              className="py-2 px-8 border border-zinc-400 rounded-full text-nowrap hover:bg-zinc-100 hover:shadow-sm transition-all"
            >
              Read More
            </Link>
          ) : null}
        </div>
      </div>
      <img src={imgSrc} alt="Miguela Website" />
    </article>
  );
}
