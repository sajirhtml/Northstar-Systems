import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Check, Menu, MoveRight, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

import finopsImage from "../assets/finops-case-study.jpg";
import logisticsImage from "../assets/logistics-case-study.jpg";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northstar Systems — Digital Engineering, Built to Endure" },
      { name: "description", content: "Northstar engineers web platforms, mobile products, technical architecture, and dependable support for ambitious companies." },
      { property: "og:title", content: "Northstar Systems — Digital Engineering, Built to Endure" },
      { property: "og:description", content: "Web, mobile, architecture, and support from one focused engineering partner." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  ["01", "Web engineering", "Fast, accessible digital products built on resilient foundations.", "React · Commerce · Platforms"],
  ["02", "Mobile products", "Native-quality experiences designed around real customer behavior.", "iOS · Android · Cross-platform"],
  ["03", "Architecture", "Clear technical direction before complexity becomes expensive.", "Audits · Cloud · Modernization"],
  ["04", "Dedicated support", "A senior team that stays close after your product ships.", "Monitoring · SLA · Iteration"],
];

const process = [
  ["01", "Discover", "We map the real problem, the people, and the constraints."],
  ["02", "Architect", "We make the system visible and the delivery plan concrete."],
  ["03", "Build", "We ship in short loops, test early, and communicate plainly."],
  ["04", "Support", "We monitor, improve, and transfer knowledge without friction."],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "Asia/Dhaka" }).format(new Date()));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto grid h-16 max-w-[1480px] grid-cols-[minmax(0,1fr)_auto] items-center px-4 sm:px-7">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Northstar home">
            <span className="grid size-8 shrink-0 place-items-center bg-foreground font-display text-xs text-background">N°</span>
            <span className="truncate font-display text-sm font-semibold uppercase">Northstar Systems</span>
          </a>
          <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase md:flex" aria-label="Main navigation">
            <a className="transition-colors hover:text-primary" href="#services">Services</a>
            <a className="transition-colors hover:text-primary" href="#work">Work</a>
            <a className="transition-colors hover:text-primary" href="#process">Process</a>
            <Button asChild variant="sky"><a href="#contact">Start a project <ArrowUpRight size={15} /></a></Button>
          </nav>
          <Button variant="icon" className="md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </Button>
        </div>
        {menuOpen && <nav className="grid border-t border-border bg-background px-4 py-4 font-mono text-sm uppercase md:hidden"><a className="border-b border-border py-3" href="#services" onClick={() => setMenuOpen(false)}>Services</a><a className="border-b border-border py-3" href="#work" onClick={() => setMenuOpen(false)}>Work</a><a className="border-b border-border py-3" href="#process" onClick={() => setMenuOpen(false)}>Process</a><a className="py-3" href="#contact" onClick={() => setMenuOpen(false)}>Start a project</a></nav>}
      </header>

      <section id="top" className="relative border-b border-border">
        <div className="system-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto max-w-[1480px] px-4 py-7 sm:px-7 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
            <div className="animate-rise-reveal">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase text-muted-foreground sm:text-xs">
                <span className="size-2 animate-system-pulse bg-primary" />
                Independent technology company / Dhaka
              </div>
              <h1 className="mt-10 max-w-[12ch] font-display text-[clamp(3rem,8vw,7.7rem)] font-semibold leading-[0.92] uppercase">
                We turn <span className="text-primary">ambition</span> into working systems.
              </h1>
              <div className="mt-10 grid max-w-4xl gap-6 border-t border-border pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">Web, mobile, architecture, and technical support for companies building what comes next.</p>
                <Button asChild><a href="#contact">Discuss your project <MoveRight size={17} /></a></Button>
              </div>
            </div>

            <aside className="border border-border bg-background p-5 lg:self-end" aria-label="Studio status">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase text-muted-foreground"><span>Operations console</span><span>NS / 001</span></div>
              <div className="mt-8 border-b border-border pb-4">
                <div className="font-mono text-xs text-muted-foreground">LOCAL TIME · DAC</div>
                <div className="mt-2 font-display text-4xl sm:text-5xl">{time || "--:--:--"}</div>
              </div>
              <div className="grid grid-cols-2 gap-px bg-border">
                <div className="bg-background py-4 pr-3"><div className="font-mono text-[10px] text-muted-foreground">STATUS</div><div className="mt-2 flex items-center gap-2 text-sm font-semibold"><span className="size-2 animate-system-pulse bg-primary" />Taking briefs</div></div>
                <div className="bg-background py-4 pl-3"><div className="font-mono text-[10px] text-muted-foreground">RESPONSE</div><div className="mt-2 text-sm font-semibold">Within 1 day</div></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b border-border bg-foreground py-3 text-background">
        <div className="flex w-max animate-ticker gap-8 font-mono text-[11px] uppercase"><span>Strategy ◆ Product design ◆ Web engineering ◆ Mobile apps ◆ Cloud architecture ◆ Technical support ◆ </span><span>Strategy ◆ Product design ◆ Web engineering ◆ Mobile apps ◆ Cloud architecture ◆ Technical support ◆ </span></div>
      </div>

      <section id="services" className="mx-auto max-w-[1480px] border-x border-border">
        <SectionTitle number="01" title="What we engineer" note="One accountable team, four disciplines." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {services.map(([number, title, copy, tags], index) => (
            <article key={title} className={`group min-h-72 border-t border-border p-5 transition-colors hover:bg-secondary sm:p-7 ${index % 4 !== 3 ? "lg:border-r" : ""} ${index % 2 === 0 ? "md:border-r" : ""}`}>
              <div className="flex items-center justify-between font-mono text-xs"><span>{number}</span><ArrowDownRight className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" size={18} /></div>
              <h2 className="mt-16 font-display text-2xl font-semibold uppercase">{title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              <p className="mt-8 border-t border-border pt-3 font-mono text-[10px] uppercase text-muted-foreground">{tags}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="border-y border-border bg-foreground text-background">
        <div className="mx-auto max-w-[1480px]">
          <SectionTitle number="02" title="Selected systems" note="Concept work demonstrating our product range." inverted />
          <div className="grid lg:grid-cols-2">
            <CaseStudy image={finopsImage} title="Aster / Finance operations" metric="42% faster reconciliation" tags="Product · Platform · Data" />
            <CaseStudy image={logisticsImage} title="Wayline / Live logistics" metric="18k routes managed daily" tags="Mobile · Maps · Operations" second />
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-[1480px] border-x border-border">
        <SectionTitle number="03" title="The way through" note="Visible work. Clear decisions. No theatre." />
        <div className="grid lg:grid-cols-4">
          {process.map(([number, title, copy], index) => <article key={title} className={`relative border-t border-border p-6 sm:p-8 ${index < 3 ? "lg:border-r" : ""}`}><div className="h-1 w-full bg-secondary"><span className="block h-full animate-line-draw bg-primary" style={{ animationDelay: `${index * 140}ms` }} /></div><div className="mt-8 font-display text-5xl text-primary">{number}</div><h2 className="mt-12 font-display text-xl uppercase">{title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p></article>)}
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-primary">
        <div className="mx-auto grid max-w-[1480px] lg:grid-cols-[minmax(0,1fr)_480px]">
          <div className="p-6 sm:p-10 lg:p-14">
            <div className="font-mono text-xs uppercase">04 / Start something useful</div>
            <h2 className="mt-8 max-w-[11ch] font-display text-[clamp(2.5rem,6vw,6rem)] font-semibold leading-[.95] uppercase">Bring us the hard problem.</h2>
            <p className="mt-8 max-w-xl text-lg">We’ll bring clarity, senior technical judgment, and a plan you can act on.</p>
          </div>
          <div className="border-t border-foreground/20 bg-background p-6 text-foreground sm:p-10 lg:border-l lg:border-t-0">
            {sent ? <div className="flex min-h-80 flex-col justify-between"><Check size={38} className="text-primary" /><div><h3 className="font-display text-2xl uppercase">Message staged.</h3><p className="mt-3 text-muted-foreground">This prototype confirms the interaction. Connect your email service to receive real enquiries.</p><Button className="mt-7" onClick={() => setSent(false)}>Send another</Button></div></div> : <form onSubmit={submit} className="grid gap-5"><label className="grid gap-2 font-mono text-[10px] uppercase">Name<input required name="name" className="min-h-12 border border-input bg-background px-3 font-sans text-sm normal-case outline-hidden focus:border-foreground" /></label><label className="grid gap-2 font-mono text-[10px] uppercase">Work email<input required type="email" name="email" className="min-h-12 border border-input bg-background px-3 font-sans text-sm normal-case outline-hidden focus:border-foreground" /></label><label className="grid gap-2 font-mono text-[10px] uppercase">What are you building?<textarea required name="project" rows={5} className="resize-none border border-input bg-background p-3 font-sans text-sm normal-case outline-hidden focus:border-foreground" /></label><Button type="submit" variant="primary">Request a consultation <ArrowUpRight size={17} /></Button></form>}
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-foreground text-background"><div className="mx-auto grid max-w-[1480px] gap-8 px-4 py-8 font-mono text-[10px] uppercase sm:grid-cols-3 sm:px-7"><div>Northstar Systems<br /><span className="text-background/60">Digital engineering company</span></div><div>Dhaka · Working globally<br /><span className="text-background/60">hello@northstar.systems</span></div><div className="sm:text-right">© 2026 Northstar<br /><span className="text-background/60">All systems ready</span></div></div></footer>
    </main>
  );
}

function SectionTitle({ number, title, note, inverted = false }: { number: string; title: string; note: string; inverted?: boolean }) {
  return <div className={`grid gap-5 p-5 sm:grid-cols-[auto_1fr_auto] sm:items-end sm:p-7 ${inverted ? "border-background/15" : "border-border"}`}><span className={`font-mono text-xs ${inverted ? "text-primary" : "text-muted-foreground"}`}>{number}</span><h2 className="font-display text-3xl font-semibold uppercase sm:text-5xl">{title}</h2><p className={`max-w-xs text-sm ${inverted ? "text-background/60" : "text-muted-foreground"}`}>{note}</p></div>;
}

function CaseStudy({ image, title, metric, tags, second = false }: { image: string; title: string; metric: string; tags: string; second?: boolean }) {
  return <article className={`group border-t border-background/15 p-4 sm:p-7 ${second ? "lg:border-l" : ""}`}><div className="overflow-hidden bg-background"><img src={image} alt={`${title} product interface concept`} loading="lazy" width={1440} height={960} className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" /></div><div className="grid gap-5 border-t border-background/15 pt-5 sm:grid-cols-[1fr_auto]"><div><h3 className="font-display text-xl uppercase sm:text-2xl">{title}</h3><p className="mt-2 font-mono text-[10px] uppercase text-background/55">{tags}</p></div><div className="font-mono text-xs text-primary sm:text-right">{metric}</div></div></article>;
}