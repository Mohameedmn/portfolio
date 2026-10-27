import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, ArrowUpRight, Download, Mail, Github, Linkedin, Smartphone } from "lucide-react";
import { PROFILE, PROJECTS, MOBILE_APPS, EXPERIENCE, SKILLS, type Project, type MobileApp } from "@/lib/portfolio-data";

const TITLE = "Mohamed Mansouri — Software Developer · AI & Data Science";
const DESC =
  "Portfolio of Mohamed Mansouri, software developer and Master's student at USTHB building mobile apps, web platforms, backend systems, and AI solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: PROFILE.portrait },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: PROFILE.portrait },
    ],
  }),
  component: Index,
});

const NAV = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
] as const;

const container = "mx-auto w-full max-w-[1160px] px-5 sm:px-8";
const btnPrimary =
  "inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85";
const btnSecondary =
  "inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary";
const link = "font-medium text-accent underline-offset-4 hover:underline";

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className={`${container} flex h-14 items-center justify-between`}>
        <a href="#top" className="font-bold tracking-tight">{PROFILE.name}</a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</a>
          ))}
          <a href={PROFILE.cvUrl} download className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-sm font-semibold text-primary-foreground hover:opacity-85">
            <Download className="size-3.5" /> Download CV
          </a>
        </nav>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background md:hidden" aria-label="Mobile">
          <div className={`${container} flex flex-col py-3`}>
            {NAV.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-2.5 text-sm font-medium">{l}</a>
            ))}
            <a href={PROFILE.cvUrl} download className={`${btnPrimary} mt-2 justify-center`}>
              <Download className="size-4" /> Download CV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className={`${container} grid items-center gap-12 pb-16 pt-14 md:grid-cols-[1.25fr_1fr] md:pt-24`}>
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-accent">SOFTWARE DEVELOPER · AI &amp; DATA SCIENCE</p>
        <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          I build software that solves real problems.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          I'm Mohamed Mansouri, a software developer and Master's student in Intelligent Computer Systems at USTHB. I build
          mobile applications, web platforms, backend systems, and intelligent solutions that combine practical software
          engineering with AI.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className={btnPrimary}>Explore My Projects <ArrowUpRight className="size-4" /></a>
          <a href={PROFILE.cvUrl} download className={btnSecondary}><Download className="size-4" /> Download CV</a>
        </div>
        <a href="#contact" className={`${link} mt-5 inline-block text-sm`}>Let's discuss a project →</a>
      </div>
      <div className="mx-auto w-full max-w-sm md:max-w-none">
        <img
          src={PROFILE.portrait}
          alt="Portrait of Mohamed Mansouri"
          width={480}
          height={600}
          className="aspect-[4/5] w-full rounded-2xl border border-border object-cover shadow-card"
        />
      </div>
      <p className="text-sm text-muted-foreground md:col-span-2">
        {["Flutter", "Dart", "Laravel", "React", "Python", "PyTorch"].join("  ·  ")}
      </p>
    </section>
  );
}

function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  const base = "relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-border bg-secondary";
  if (kind === "research")
    return (
      <div className={base} aria-hidden>
        <div className="grid h-full w-full grid-cols-12 grid-rows-6 gap-px opacity-80">
          {Array.from({ length: 72 }).map((_, i) => (
            <div key={i} className={["bg-chart-2/40", "bg-chart-4/40", "bg-chart-5/30", "bg-chart-3/25"][(i * 7 + (i % 5)) % 4]} />
          ))}
        </div>
        <span className="absolute bottom-3 left-3 rounded bg-card px-2 py-1 text-[11px] font-medium text-muted-foreground">
          Illustrative field map — replace with a real visualization
        </span>
      </div>
    );
  const label = {
    web: "Screenshot placeholder — tothemoonwithenglish.com",
    esim: "No screenshots shown (confidential internship project)",
    route: "Screenshot placeholder — Routimize",
  }[kind];
  return (
    <div className={base}>
      <span className="px-6 text-center text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <ProjectVisual kind={p.visual} />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold text-accent">{p.category}</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">{p.title}</h3>
        {p.context && <p className="mt-1 text-sm font-medium text-foreground/70">{p.context}</p>}
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
        {p.role && (
          <dl className="mt-4 space-y-2 rounded-lg bg-secondary p-3 text-sm">
            {p.role.map((r) => (
              <div key={r.label}>
                <dt className="font-semibold">{r.label}</dt>
                <dd className="text-muted-foreground">{r.text}</dd>
              </div>
            ))}
          </dl>
        )}
        {p.highlights && (
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {p.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
        )}
        <div className="mt-5 flex flex-wrap gap-1.5">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        {p.link && (
          <a href={p.link.href} target="_blank" rel="noreferrer" className={`${link} mt-auto inline-flex items-center gap-1 pt-5 text-sm`}>
            {p.link.label} <ArrowUpRight className="size-4" />
          </a>
        )}
      </div>
    </article>
  );
}

function Phone({ src, i, name }: { src?: string | undefined; i: number; name: string }) {
  return (
    <div className="w-[30%] max-w-[150px] rounded-[1.4rem] border-4 border-foreground bg-foreground p-0.5 shadow-card">
      <div className="flex aspect-[9/19] items-center justify-center overflow-hidden rounded-[1.1rem] bg-card">
        {src ? (
          <img src={src} alt={`${name} screenshot ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <span className="px-2 text-center text-[10px] font-medium text-muted-foreground">Screenshot {i + 1}<br />to be added</span>
        )}
      </div>
    </div>
  );
}

function MobileAppCard({ app }: { app: MobileApp }) {
  const shots = app.screenshots.length ? app.screenshots : [undefined, undefined, undefined];
  return (
    <article className="grid gap-8 rounded-2xl border border-border bg-card p-6 shadow-card md:grid-cols-[1.1fr_1fr] md:p-8">
      <div className="flex items-end justify-center gap-3 rounded-xl bg-secondary px-4 pt-8 pb-6">
        {shots.slice(0, 3).map((s, i) => <Phone key={i} src={s} i={i} name={app.name} />)}
      </div>
      <div className="flex flex-col">
        <Tag>{app.status}</Tag>
        <h4 className="mt-3 text-xl font-bold tracking-tight">{app.name}</h4>
        <p className="mt-2 text-sm text-muted-foreground">{app.description}</p>
        <p className="mt-5 text-xs font-semibold uppercase tracking-wider">Main features</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {app.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
        <div className="mt-5 flex flex-wrap gap-1.5">{app.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        <div className="mt-auto flex flex-wrap gap-4 pt-5 text-sm">
          {app.links.length ? (
            app.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className={`${link} inline-flex items-center gap-1`}>
                {l.label} <ArrowUpRight className="size-4" />
              </a>
            ))
          ) : (
            <span className="text-muted-foreground">[GitHub / demo / download link — to be added]</span>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [web, esim, route, research] = PROJECTS as [Project, Project, Project, Project];
  return (
    <section id="projects" className="border-t border-border py-20">
      <div className={container}>
        <SectionHead eyebrow="WORK" title="Selected Projects" sub="A selection of applications, platforms, and intelligent systems I've worked on." />
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard p={web} />
          <ProjectCard p={research} />
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Smartphone className="size-4" /></span>
            <div>
              <p className="text-xs font-semibold text-accent">Mobile Development</p>
              <h3 className="text-2xl font-bold tracking-tight">Personal Mobile Applications</h3>
            </div>
          </div>
          <p className="mb-6 max-w-2xl text-muted-foreground">Applications I designed and developed independently.</p>
          <div className="space-y-6">{MOBILE_APPS.map((a, i) => <MobileAppCard key={i} app={a} />)}</div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <ProjectCard p={esim} />
          <ProjectCard p={route} />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border py-20">
      <div className={`${container} grid gap-12 md:grid-cols-[1.4fr_1fr]`}>
        <div>
          <SectionHead eyebrow="ABOUT" title="About Me" />
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>I work at the intersection of software engineering and artificial intelligence. On one side, I build complete products — Flutter mobile apps, Laravel backends and REST APIs, and React interfaces.</p>
            <p>On the other, I study and apply machine learning, with a particular interest in computer vision and remote sensing. I care about practical, maintainable software that delivers real value.</p>
          </div>
        </div>
        <div className="space-y-6 md:pt-20">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Education</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li><p className="font-semibold">Master's in Intelligent Computer Systems</p><p className="text-muted-foreground">USTHB University · 2025 – present</p></li>
              <li><p className="font-semibold">Bachelor's in Computer Science</p><p className="text-muted-foreground">USTHB University · 2025</p></li>
            </ul>
            <a href={PROFILE.usthb} target="_blank" rel="noreferrer" className={`${link} mt-4 inline-flex items-center gap-1 text-sm`}>usthb.dz <ArrowUpRight className="size-4" /></a>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Areas of interest</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Software development", "Machine learning", "Computer vision", "Remote sensing"].map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-t border-border py-20">
      <div className={container}>
        <SectionHead eyebrow="EXPERIENCE" title="Experience" />
        <ol className="relative space-y-10 border-l border-border pl-8">
          {EXPERIENCE.map((e) => (
            <li key={e.org} className="relative">
              <span className="absolute -left-[37px] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-background" aria-hidden />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-bold">{e.role}</h3>
                <span className="text-muted-foreground">· {e.org}</span>
                <Tag>{e.type}</Tag>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{e.dates}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {e.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">{e.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-border py-20">
      <div className={container}>
        <SectionHead eyebrow="SKILLS" title="Technical Skills" />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <div key={s.group} className="bg-card p-6">
              <h3 className="text-sm font-semibold">{s.group}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24">
      <div className={`${container} max-w-3xl text-center`}>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Have a project in mind?</h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          I'm open to software development opportunities and freelance projects. If you're looking for a mobile application,
          web platform, backend solution, or AI-related implementation, feel free to get in touch.
        </p>
        <a href={`mailto:${PROFILE.email}`} className={`${btnPrimary} mt-8 px-6 py-3 text-base`}><Mail className="size-4" /> {PROFILE.email}</a>
        <div className="mt-6 flex justify-center gap-6 text-sm">
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className={`${link} inline-flex items-center gap-1.5`}><Linkedin className="size-4" /> LinkedIn</a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className={`${link} inline-flex items-center gap-1.5`}><Github className="size-4" /> GitHub</a>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-border py-8">
        <div className={`${container} flex flex-wrap justify-between gap-2 text-sm text-muted-foreground`}>
          <span>{PROFILE.name}</span>
          <span>© {new Date().getFullYear()} Mohamed Mansouri. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
