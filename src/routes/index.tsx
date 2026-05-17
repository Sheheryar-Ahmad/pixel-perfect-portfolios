import { createFileRoute } from "@tanstack/react-router";
import projectHypergrid from "@/assets/project-hypergrid.jpg";
import projectNeural from "@/assets/project-neural.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sheheryar Ahmad — Software Engineer & Agency" },
      {
        name: "description",
        content:
          "Full-stack engineer building high-performance interfaces, AI systems, and cloud infrastructure. Available for select projects.",
      },
      { property: "og:title", content: "Sheheryar Ahmad — Software Engineer & Agency" },
      {
        property: "og:description",
        content:
          "Full-stack engineer building high-performance interfaces, AI systems, and cloud infrastructure.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

const sideNav = [
  { id: "hero", label: "01 // START" },
  { id: "projects", label: "02 // WORK" },
  { id: "services", label: "03 // TECH" },
  { id: "contact", label: "04 // CONNECT" },
];

const sideProjects = [
  {
    repo: "sheheryar-ahmad / obsidian-ui",
    name: "Obsidian Kit",
    desc: "A premium component library for technical interfaces.",
    stars: "1.2k Stars",
  },
  {
    repo: "Open Source",
    name: "Lumina API",
    desc: "Automated documentation engine for GraphQL schemas.",
    progress: 66,
  },
];

const services = [
  {
    no: "01 / Full Stack",
    body: "Building scalable backends in Go/Node and pixel-perfect frontends in React/Next.js.",
  },
  {
    no: "02 / AI Systems",
    body: "Integration of custom machine learning models and LLMs into existing product workflows.",
  },
  {
    no: "03 / Cloud Infrastructure",
    body: "Deployment architecture, serverless scaling, and CI/CD pipelines with high-availability.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display selection:bg-primary/30">
      {/* Sticky side index */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 z-50">
        <div className="flex flex-col gap-4 text-[10px] font-mono tracking-widest text-muted-foreground">
          {sideNav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="hover:text-primary transition-colors flex items-center gap-2 group"
            >
              <span className="h-px w-4 bg-border group-hover:w-8 group-hover:bg-primary transition-all" />
              {n.label}
            </a>
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero */}
        <section id="hero" className="mb-32 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white/5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-[10px] font-mono uppercase tracking-tighter">
              Available for new cycles
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 text-balance leading-[0.9]">
            Crafting <span className="text-muted-foreground">Digital</span> Instruments.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="text-xl text-muted-foreground text-pretty max-w-md leading-relaxed">
              Sheheryar Ahmad — Full-stack engineer & architect focusing on high-performance
              interfaces and autonomous systems.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-foreground text-background font-semibold rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Get in touch
              </a>
              <a
                href="https://github.com/Sheheryar-Ahmad"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border border-border font-semibold rounded-sm hover:bg-white/5 transition-all"
              >
                View Github
              </a>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-32">
          <div className="flex items-baseline justify-between mb-12 border-b border-border pb-4">
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
              Selected Repositories
            </h2>
            <span className="text-[10px] font-mono text-muted-foreground">[ 04 items ]</span>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* Featured */}
            <article
              className="col-span-12 md:col-span-8 group relative overflow-hidden rounded-xl border border-border bg-white/[0.02] p-8 hover:border-primary/50 transition-colors animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <span className="text-xs font-mono text-primary mb-2 block">
                    sheheryar-ahmad / hyper-grid
                  </span>
                  <h3 className="text-3xl font-bold tracking-tight">HyperGrid Engine</h3>
                </div>
                <span className="px-2 py-1 rounded border border-border text-[10px] font-mono">
                  v2.4.0
                </span>
              </div>
              <img
                src={projectHypergrid}
                alt="HyperGrid Engine system visualization"
                loading="lazy"
                className="w-full aspect-video object-cover rounded-lg mb-6 border border-border"
              />
              <p className="text-muted-foreground max-w-lg mb-6">
                High-performance distributed state management for real-time visualization systems.
              </p>
              <div className="flex gap-3">
                {["Rust", "TypeScript", "WebAssembly"].map((t) => (
                  <span key={t} className="text-[10px] font-mono text-foreground/60">
                    {t}
                  </span>
                ))}
              </div>
            </article>

            {/* Two side projects */}
            {sideProjects.map((p, i) => (
              <article
                key={p.name}
                className="col-span-12 md:col-span-4 group rounded-xl border border-border bg-white/[0.02] p-8 flex flex-col justify-between hover:bg-white/[0.04] transition-all animate-fade-up"
                style={{ animationDelay: `${200 + i * 100}ms` }}
              >
                <div>
                  <span className="text-xs font-mono text-muted-foreground mb-4 block">
                    {p.repo}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
                {p.stars ? (
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full border-2 border-background bg-zinc-800" />
                      <div className="w-6 h-6 rounded-full border-2 border-background bg-zinc-700" />
                    </div>
                    <span className="text-[10px] font-mono">{p.stars}</span>
                  </div>
                ) : (
                  <div className="mt-8">
                    <div className="w-full bg-border h-1 rounded-full overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full"
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </article>
            ))}

            {/* Wide R&D */}
            <article
              className="col-span-12 md:col-span-8 group rounded-xl border border-border bg-white/[0.02] p-8 grid md:grid-cols-2 gap-8 hover:border-primary/50 transition-all animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex flex-col justify-center">
                <span className="text-xs font-mono text-muted-foreground mb-2 block">
                  Active R&amp;D
                </span>
                <h3 className="text-2xl font-bold tracking-tight mb-4">Neural Flow</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Experimenting with local LLM integration for dev-tools automation and code
                  generation.
                </p>
                <a
                  href="https://github.com/Sheheryar-Ahmad"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-mono uppercase tracking-widest text-primary hover:underline self-start"
                >
                  Read whitepaper →
                </a>
              </div>
              <img
                src={projectNeural}
                alt="Neural Flow model visualization"
                loading="lazy"
                className="w-full h-full min-h-[160px] object-cover rounded-lg border border-border"
              />
            </article>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((s, i) => (
              <div
                key={s.no}
                className="animate-fade-up"
                style={{ animationDelay: `${100 + i * 100}ms` }}
              >
                <h4 className="text-xs font-mono text-primary mb-6 uppercase tracking-widest">
                  {s.no}
                </h4>
                <p className="text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-32 py-20 border-y border-border">
          <div className="max-w-3xl">
            <p className="text-3xl italic tracking-tight mb-8 text-pretty leading-snug">
              &ldquo;Sheheryar possesses a rare combination of technical depth and aesthetic
              intuition. He didn&rsquo;t just build our platform; he engineered an experience that
              scaled effortlessly.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10" />
              <div>
                <span className="block font-bold">Marcus Vane</span>
                <span className="text-xs font-mono text-muted-foreground">CTO at Vector Labs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-extrabold tracking-tighter mb-8">Ready to build?</h2>
            <p className="text-muted-foreground text-lg mb-12">
              Currently accepting select projects for 2026. Let&rsquo;s discuss your vision.
            </p>
            <div className="flex flex-col gap-6">
              <a
                href="mailto:sheheryar3847@gmail.com"
                className="text-2xl font-medium border-b border-border pb-2 hover:border-primary transition-all self-start"
              >
                sheheryar3847@gmail.com
              </a>
              <a
                href="tel:+923084369866"
                className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors self-start"
              >
                +92 308 4369866
              </a>
              <div className="flex gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <a
                  href="https://www.linkedin.com/in/sheheryar-ahmad-3a0b27381"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Sheheryar-Ahmad"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="mailto:sheheryar3847@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
          <form
            className="bg-white/[0.02] border border-border p-8 rounded-xl flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono text-muted-foreground uppercase">
                Full Name
              </label>
              <input
                type="text"
                className="bg-transparent border-b border-border py-2 outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono text-muted-foreground uppercase">
                Service Required
              </label>
              <select className="bg-transparent border-b border-border py-2 outline-none focus:border-primary transition-colors">
                <option className="bg-background">Web Development</option>
                <option className="bg-background">AI Integration</option>
                <option className="bg-background">Cloud Strategy</option>
                <option className="bg-background">Automation</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono text-muted-foreground uppercase">Brief</label>
              <textarea
                rows={3}
                className="bg-transparent border-b border-border py-2 outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-4 py-4 bg-primary text-primary-foreground font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all rounded-sm"
            >
              Initiate Contact
            </button>
          </form>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-4 justify-between items-center border-t border-border mt-20">
        <p className="text-[10px] font-mono text-muted-foreground">
          © 2026 SHEHERYAR AHMAD. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-[10px] font-mono">Operational</span>
          </div>
          <span className="text-[10px] font-mono text-muted-foreground">
            // 31.5204° N, 74.3587° E
          </span>
        </div>
      </footer>
    </div>
  );
}
