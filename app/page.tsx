import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-medium">Simão Bentes</h1>
      <p className="mb-4">
        Hey there! I'm a Product Designer over at Altice Labs. My main focus is on
        building and managing solid design systems that make sure our B2B products are
        consistent and easy to use. I love what I do because I get to mix creativity with
        tech skills to make digital experiences better for users.
      </p>
      <p>
        You can find me trying out new recipes, going for runs, or just chilling with a
        good movie.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
