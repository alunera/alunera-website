import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { IndustriesMarquee } from "@/components/IndustriesMarquee";
import { TallyFormModal } from "@/components/TallyFormModal";
import {
  TrendingDown,
  Clock,
  AlertCircle,
  BarChart2,
  Eye,
  MapPin,
  Settings,
  Bot,
  ActivitySquare,
  BarChart,
  Lightbulb,
  XCircle,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <div className="w-full">

        {/* ── HERO ── */}
        <section
          className="relative overflow-hidden pt-24 pb-36 px-4 md:px-6 text-white"
          style={{ background: "linear-gradient(135deg, #1e0744 0%, #2d0b5e 45%, #180535 100%)" }}
        >
          <div className="pointer-events-none absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, #ec4899 0%, transparent 65%)" }} />
          <div className="pointer-events-none absolute -bottom-16 -left-16 w-[360px] h-[360px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }} />
          <div className="pointer-events-none absolute bottom-0 right-1/4 w-[280px] h-[200px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #fde68a 0%, transparent 70%)" }} />

          <div className="container mx-auto max-w-6xl relative z-10 flex flex-col lg:flex-row items-center gap-14">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold border border-white/10 bg-white/5 backdrop-blur-sm text-pink-300">
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                Business Growth Systems &amp; Revenue Efficiency Partner
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-balance leading-tight">
                Stop Losing Revenue Through{" "}
                <span style={{ background: "linear-gradient(90deg, #f472b6, #c084fc, #fde68a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Broken Follow-Up
                </span>{" "}
                and Inefficient Systems
              </h1>
              <p className="text-lg md:text-xl text-white/65 max-w-2xl mx-auto lg:mx-0 mb-4 text-balance">
                Alunera diagnoses and fixes the operational gaps that cause missed leads, slow response times, and lost customers — then installs systems that convert more enquiries into revenue.
              </p>
              <p className="text-sm text-white/40 max-w-xl mx-auto lg:mx-0 mb-10 italic">
                No pitch. Just a breakdown of where you're losing revenue.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button size="lg"
                  className="h-14 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                  onClick={() => setIsModalOpen(true)}
                  data-testid="button-hero-audit">
                  Book Your Free Growth Audit
                </Button>
                <Button variant="outline" size="lg"
                  className="h-14 px-8 text-lg font-semibold border-white/20 text-white bg-white/5 hover:bg-white/10 w-full sm:w-auto"
                  onClick={scrollToHowItWorks}
                  data-testid="button-hero-learn">
                  Learn How It Works
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex flex-1 w-full max-w-md aspect-square items-center justify-center">
              <div className="relative w-full h-full max-w-[380px] max-h-[380px]">
                <div className="absolute inset-0 border border-pink-400/20 rounded-full animate-[spin_12s_linear_infinite]" />
                <div className="absolute inset-8 border border-purple-400/15 rounded-full animate-[spin_18s_linear_infinite_reverse]" />
                <div className="absolute inset-16 border border-yellow-200/10 rounded-full animate-[spin_9s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full flex items-center justify-center"
                  style={{ background: "radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)", border: "1px solid rgba(192,132,252,0.3)" }}>
                  <div className="w-16 h-16 rounded-full animate-pulse"
                    style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }} />
                </div>
                {[0, 1, 2].map((i) => (
                  <div key={i} className="absolute top-0 bottom-0 left-1/2 w-0 flex justify-center"
                    style={{ transform: `rotate(${i * 120}deg)` }}>
                    <div className="w-7 h-7 rounded-full -translate-y-3 shadow-lg border border-white/20"
                      style={{ background: i % 2 === 0 ? "#a855f7" : "#ec4899" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHERE BUSINESSES ARE LOSING REVENUE ── */}
        <section
          className="py-20 px-4 md:px-6 relative"
          style={{ background: "linear-gradient(180deg, #ede8f8 0%, #e2d9f5 100%)" }}
        >
          <div className="pointer-events-none absolute inset-0 flex items-end justify-end overflow-hidden">
            <div className="w-[400px] h-[300px] opacity-20 translate-x-20 translate-y-10"
              style={{ background: "radial-gradient(circle, #c084fc 0%, transparent 70%)" }} />
          </div>
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center mb-14">
              <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Revenue Diagnosis</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Where Businesses Are{" "}
                <span className="text-primary">Losing Revenue</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Most service businesses don't have a demand problem. They have a systems problem — and it's costing them more than they realise.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Clock,
                  label: "Revenue Leakage",
                  title: "Leads lost to slow response times",
                  desc: "Warm prospects move on within minutes. Every delayed reply is revenue walking out the door.",
                },
                {
                  icon: TrendingDown,
                  label: "Conversion Leakage",
                  title: "No follow-up system in place",
                  desc: "Without automated follow-up, most enquiries quietly go cold — and the business never knows.",
                },
                {
                  icon: AlertCircle,
                  label: "Capacity Leakage",
                  title: "Manual admin draining your team",
                  desc: "Hours lost to repetitive tasks every week means less time for revenue-generating work.",
                },
                {
                  icon: Eye,
                  label: "Visibility Loss",
                  title: "Disconnected tools and no oversight",
                  desc: "No single source of truth means missed opportunities and decisions made in the dark.",
                },
                {
                  icon: BarChart2,
                  label: "Pipeline Leakage",
                  title: "Untracked enquiries and dropped leads",
                  desc: "Leads fall through cracks in the system daily — silently eroding your revenue pipeline.",
                },
                {
                  icon: TrendingDown,
                  label: "Growth Leakage",
                  title: "Inconsistent client experience",
                  desc: "Disorganised onboarding and communication reduces referrals and repeat business.",
                },
              ].map((item, i) => (
                <div key={i}
                  className="rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
                  style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ background: "linear-gradient(135deg, rgba(239,68,68,0.12), rgba(239,68,68,0.05))" }}>
                      <item.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <span className="text-xs font-black tracking-wider text-destructive uppercase">{item.label}</span>
                  </div>
                  <div className="font-bold text-foreground mb-1">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE ALUNERA REVENUE SYSTEM ── */}
        <section
          className="py-24 px-4 md:px-6 relative overflow-hidden text-white"
          style={{ background: "linear-gradient(135deg, #1e0744 0%, #3b0764 55%, #180535 100%)" }}
        >
          <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-[250px] opacity-20"
            style={{ background: "radial-gradient(ellipse, #ec4899 0%, transparent 70%)" }} />
          <div className="pointer-events-none absolute bottom-0 right-0 w-[350px] h-[250px] opacity-15"
            style={{ background: "radial-gradient(ellipse, #fde68a 0%, transparent 70%)" }} />

          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <p className="text-sm font-bold tracking-widest text-pink-300 uppercase mb-3">The Solution</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              The Alunera Revenue System
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-4">
              A structured system that closes every gap — from first enquiry to repeat business.
            </p>
            <p className="text-sm text-white/40 max-w-2xl mx-auto mb-16 italic">
              Every step is designed to prevent revenue from slipping through the cracks.
            </p>

            <div className="flex flex-col md:flex-row items-stretch justify-between gap-3 mb-14 relative">
              <div className="hidden md:block absolute top-1/2 left-[8%] right-[8%] h-px -translate-y-1/2 z-0"
                style={{ background: "linear-gradient(90deg, transparent, rgba(244,114,182,0.5), rgba(192,132,252,0.5), rgba(253,230,138,0.5), transparent)" }} />
              {[
                { stage: "ATTRACT", desc: "Capture inbound demand", col: "#f472b6" },
                { stage: "CAPTURE", desc: "Never lose a lead", col: "#d946ef" },
                { stage: "RESPOND", desc: "Instant automated engagement", col: "#a855f7" },
                { stage: "CONVERT", desc: "Structured follow-up", col: "#9333ea" },
                { stage: "TRACK", desc: "Full pipeline visibility", col: "#c084fc" },
                { stage: "OPTIMISE", desc: "Scale what works", col: "#fde68a" },
              ].map((step, i) => (
                <div key={i}
                  className="relative z-10 rounded-2xl p-5 flex-1 text-center border hover:scale-105 transition-transform"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderColor: "rgba(255,255,255,0.10)",
                    backdropFilter: "blur(8px)",
                  }}>
                  <div className="text-xs font-black tracking-widest mb-2" style={{ color: step.col }}>{step.stage}</div>
                  <div className="text-xs text-white/50">{step.desc}</div>
                </div>
              ))}
            </div>

            <div className="inline-block rounded-full px-8 py-4 text-lg font-bold text-white shadow-xl"
              style={{ background: "linear-gradient(90deg, #a855f7, #ec4899, #f59e0b)" }}>
              Less admin. More conversions. More revenue.
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <IndustriesMarquee />

        {/* ── HOW IT WORKS ── */}
        <section
          id="how-it-works"
          className="py-24 px-4 md:px-6 relative"
          style={{ background: "linear-gradient(180deg, #ede8f8 0%, #e6dff7 100%)" }}
        >
          <div className="pointer-events-none absolute top-0 left-0 w-[300px] h-[300px] opacity-15"
            style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }} />
          <div className="container mx-auto max-w-5xl relative z-10">
            <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3 text-center">The Process</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
              From Diagnosis to Growth — A Clear Path
            </h2>
            <div className="grid md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px z-0"
                style={{ background: "linear-gradient(90deg, #a855f7, #ec4899, #f59e0b)" }} />
              {[
                { step: 1, title: "Book Your Free Growth Audit", bg: "linear-gradient(135deg,#7c3aed,#a855f7)" },
                { step: 2, title: "Identify Revenue Leaks & Bottlenecks", bg: "linear-gradient(135deg,#9333ea,#c084fc)" },
                { step: 3, title: "Install Your Revenue System", bg: "linear-gradient(135deg,#be185d,#ec4899)" },
                { step: 4, title: "Convert More. Grow Faster.", bg: "linear-gradient(135deg,#d97706,#fbbf24)" },
              ].map((item) => (
                <div key={item.step} className="relative z-10 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-black mb-5 text-white shadow-lg border-4 border-background"
                    style={{ background: item.bg }}>
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-base leading-snug">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY ALUNERA ── */}
        <section
          className="py-24 px-4 md:px-6 relative overflow-hidden text-white"
          style={{ background: "linear-gradient(135deg, #180535 0%, #2d0b5e 50%, #3b0764 100%)" }}
        >
          <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] opacity-20"
            style={{ background: "radial-gradient(circle, #fde68a 0%, transparent 70%)" }} />
          <div className="pointer-events-none absolute top-0 left-0 w-[350px] h-[350px] opacity-20"
            style={{ background: "radial-gradient(circle, #ec4899 0%, transparent 70%)" }} />

          <div className="container mx-auto max-w-5xl relative z-10">
            <p className="text-sm font-bold tracking-widest text-pink-300 uppercase mb-3 text-center">Why Alunera</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center text-white mb-4">
              We Install Systems That Stop Revenue Leakage
            </h2>
            <p className="text-center text-white/50 max-w-2xl mx-auto mb-14">
              Built specifically for South African service businesses that want to stop losing revenue and start scaling efficiently.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: MapPin, title: "South African market focus", desc: "Built for local service businesses and the SA market.", col: "#f472b6" },
                { icon: Settings, title: "Real systems, not theory", desc: "Practical implementation — installed, configured, and working.", col: "#c084fc" },
                { icon: Bot, title: "Automation where it matters", desc: "Smart automation that saves hours and captures more leads every week.", col: "#f472b6" },
                { icon: ActivitySquare, title: "Operational efficiency focus", desc: "Reduce friction and capacity leakage across your entire operation.", col: "#c084fc" },
                { icon: BarChart, title: "Conversion-driven by design", desc: "Every system is built to maximise conversions at every stage.", col: "#fde68a" },
                { icon: Lightbulb, title: "Root cause problem solving", desc: "We fix the underlying issues — not just the surface symptoms.", col: "#fde68a" },
              ].map((feature, i) => (
                <div key={i}
                  className="rounded-2xl p-6 border hover:scale-[1.02] transition-transform"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                  }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${feature.col}22` }}>
                    <feature.icon className="w-5 h-5" style={{ color: feature.col }} />
                  </div>
                  <h3 className="text-white font-bold mb-1">{feature.title}</h3>
                  <p className="text-white/50 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COST OF DOING NOTHING ── */}
        <section
          className="py-20 px-4 md:px-6 relative"
          style={{ background: "linear-gradient(180deg, #ede8f8 0%, #e2d9f5 100%)" }}
        >
          <div className="pointer-events-none absolute top-0 right-0 w-[350px] h-[350px] opacity-15"
            style={{ background: "radial-gradient(circle, #ec4899 0%, transparent 70%)" }} />
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3">The Hidden Cost</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                What Inefficient Systems Are{" "}
                <span className="text-primary">Costing You</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Most businesses don't notice this until it's fixed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Missed leads every week that never get followed up",
                "Slower sales cycles caused by manual back-and-forth",
                "Higher staff workload from repetitive, automatable tasks",
                "Lower conversion rates from delayed or inconsistent responses",
                "Untracked lost revenue with no way to measure what's slipping through",
              ].map((item, i) => (
                <div key={i}
                  className="flex items-start gap-3 rounded-2xl p-5 border border-border"
                  style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}>
                  <XCircle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </div>
              ))}
              <div
                className="flex items-start gap-3 rounded-2xl p-5 border md:col-span-2"
                style={{
                  background: "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(236,72,153,0.08))",
                  borderColor: "rgba(168,85,247,0.25)",
                  backdropFilter: "blur(8px)",
                }}>
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground font-semibold text-sm">
                  Alunera identifies every one of these leaks and installs the systems to close them — permanently.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section
          className="py-24 px-4 md:px-6 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #ede8f8 0%, #e2d9f5 50%, #eadcf8 100%)" }}
        >
          <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-25"
            style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }} />
          <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 w-[350px] h-[350px] opacity-20"
            style={{ background: "radial-gradient(circle, #ec4899 0%, transparent 70%)" }} />

          <div className="container mx-auto max-w-3xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/25 bg-primary/8 text-primary">
              Free — No Obligation
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
              Find Out Where Your Business Is{" "}
              <span style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Losing Revenue
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Not guesswork. Not assumptions.
            </p>
            <p className="text-muted-foreground mb-3">A structured breakdown of your:</p>
            <ul className="text-muted-foreground text-sm space-y-1 mb-10">
              <li>Missed opportunities and unconverted leads</li>
              <li>System inefficiencies draining time and capacity</li>
              <li>Conversion bottlenecks slowing your sales cycle</li>
            </ul>
            <Button size="lg"
              className="h-14 px-10 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
              onClick={() => setIsModalOpen(true)}
              data-testid="button-final-audit">
              Book Your Free Growth Audit
            </Button>
          </div>
        </section>

      </div>
      <TallyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Layout>
  );
}
