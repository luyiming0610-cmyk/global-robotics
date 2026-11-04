
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">

      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 80% 40%,
              rgba(37, 99, 235, 0.24),
              transparent 35%
            ),
            linear-gradient(
              135deg,
              #102A43 0%,
              #0B1F33 100%
            )
          `,
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Main content */}
      <div className="mx-auto grid min-h-[680px] max-w-[var(--container-width)] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-24">

        {/* Left content */}
        <div className="relative z-10 max-w-2xl">

          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-400" />
            <span className="text-xs font-bold tracking-[0.22em] text-blue-300">
              ENGINEERING THE FUTURE
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Intelligent
            <span className="block text-blue-400">
              Automation.
            </span>
            Built for What’s Next.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Advanced robotics and industrial automation
            solutions designed to improve productivity,
            enhance precision, and move your business forward.
          </p>

          {/* Action buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#capabilities"
              className="inline-flex items-center gap-3 rounded-md bg-brand-blue px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Explore Solutions
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#approach"
              className="inline-flex items-center gap-3 rounded-md border border-slate-500 px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-blue-400 hover:text-blue-300"
            >
              Discover Our Approach
            </a>

          </div>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-7">
            <span className="text-xs font-semibold tracking-wider text-slate-300">
              PRECISION ENGINEERING
            </span>
            <span className="text-xs font-semibold tracking-wider text-slate-300">
              SMART AUTOMATION
            </span>
            <span className="text-xs font-semibold tracking-wider text-slate-300">
              INDUSTRIAL SOLUTIONS
            </span>
          </div>

        </div>

        {/* Right visual */}
        <div className="relative mx-auto w-full max-w-xl">

          <div className="absolute -inset-5 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-800/40 p-3 shadow-2xl backdrop-blur-sm">

            <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden rounded-xl bg-[#102A43]">

              {/* Technical grid */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(96,165,250,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,.35) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Circular technical illustration */}
              <div className="absolute size-[72%] rounded-full border border-blue-400/20" />
              <div className="absolute size-[56%] rounded-full border border-dashed border-blue-300/30" />

              {/* Industrial robot arm illustration */}
              <svg
                viewBox="0 0 500 400"
                className="relative z-10 w-[95%] drop-shadow-[0_0_25px_rgba(37,99,235,0.25)]"
                fill="none"
                role="img"
                aria-label="Stylized industrial robotic arm illustration"
              >
                <defs>
                  <linearGradient id="robotMetal" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#93C5FD" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1E40AF" />
                  </linearGradient>
                </defs>

                {/* Floor */}
                <path
                  d="M65 340H435"
                  stroke="#60A5FA"
                  strokeOpacity=".35"
                />

                {/* Robot base */}
                <path
                  d="M190 328L205 292H295L310 328V340H190V328Z"
                  fill="#1E40AF"
                  stroke="#93C5FD"
                  strokeWidth="2"
                />

                {/* Lower arm */}
                <path
                  d="M250 296L174 220"
                  stroke="#1E40AF"
                  strokeWidth="35"
                  strokeLinecap="round"
                />
                <path
                  d="M250 296L174 220"
                  stroke="url(#robotMetal)"
                  strokeWidth="25"
                  strokeLinecap="round"
                />

                {/* Upper arm */}
                <path
                  d="M174 220L272 126"
                  stroke="#1E40AF"
                  strokeWidth="34"
                  strokeLinecap="round"
                />
                <path
                  d="M174 220L272 126"
                  stroke="url(#robotMetal)"
                  strokeWidth="24"
                  strokeLinecap="round"
                />

                {/* Wrist */}
                <path
                  d="M272 126L341 91"
                  stroke="#3B82F6"
                  strokeWidth="23"
                  strokeLinecap="round"
                />

                {/* Tool */}
                <path
                  d="M341 91L369 76L385 94L373 109L354 105Z"
                  fill="#60A5FA"
                  stroke="#BFDBFE"
                  strokeWidth="2"
                />
                <path
                  d="M383 93L399 105L393 128"
                  stroke="#93C5FD"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                {/* Joints */}
                <circle cx="250" cy="296" r="20" fill="#102A43" stroke="#93C5FD" strokeWidth="5"/>
                <circle cx="174" cy="220" r="21" fill="#102A43" stroke="#93C5FD" strokeWidth="5"/>
                <circle cx="272" cy="126" r="19" fill="#102A43" stroke="#93C5FD" strokeWidth="5"/>

                {/* Joint highlights */}
                <circle cx="174" cy="220" r="6" fill="#60A5FA"/>
                <circle cx="272" cy="126" r="6" fill="#60A5FA"/>
              </svg>

              {/* Technical label */}
              <div className="absolute left-5 top-5 rounded border border-blue-300/20 bg-[#0B1F33]/80 px-3 py-2 backdrop-blur-md">
                <span className="block text-[9px] tracking-[0.2em] text-blue-300">
                  TECHNOLOGY
                </span>
                <span className="mt-1 block text-xs font-semibold text-white">
                  Industrial Robotics
                </span>
              </div>

              <div className="absolute bottom-5 right-5 rounded border border-white/15 bg-[#0B1F33]/80 px-3 py-2 backdrop-blur-md">
                <span className="block text-[9px] tracking-[0.2em] text-slate-400">
                  ENGINEERED FOR
                </span>
                <span className="mt-1 block text-xs font-semibold text-white">
                  Performance
                </span>
              </div>

            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 hidden size-16 rounded-xl border border-blue-400/30 bg-blue-500/10 lg:block" />

        </div>

      </div>
    </section>
  );
}
