
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />

      <section
        id="capabilities"
        className="bg-white px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-[var(--container-width)]">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-blue">
            WHAT WE DO
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Engineering smarter industrial solutions.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            Explore our approach to robotics, automation,
            and industrial engineering.
          </p>

          <div
            id="approach"
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {[
              {
                number: "01",
                title: "Robotics Integration",
                description:
                  "Connecting robotic systems with industrial workflows.",
              },
              {
                number: "02",
                title: "Intelligent Automation",
                description:
                  "Improving operational efficiency through automation.",
              },
              {
                number: "03",
                title: "Engineering Solutions",
                description:
                  "Developing solutions around real industrial requirements.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-brand-blue">
                  {item.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-brand-navy">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
