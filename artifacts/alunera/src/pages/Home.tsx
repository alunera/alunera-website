import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { IndustriesMarquee } from "@/components/IndustriesMarquee";
import { TallyFormModal } from "@/components/TallyFormModal";
import {
  XOctagon,
  Clock,
  ArchiveX,
  MessageSquareWarning,
  TrendingDown,
  AlertCircle,
  MapPin,
  Settings,
  Bot,
  ActivitySquare,
  BarChart,
  Lightbulb,
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
        <section className="relative overflow-hidden pt-24 pb-36 px-4 md:px-6 text-white"
          style={{ background: "linear-gradient(135deg, #0a1530 0%, #0d1f48 45%, #071226 100%)" }}>

          {/* Teal glow top-right */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #0fba8e 0%, transparent 70%)" }} />
          {/* Blue glow bottom-left */}
          <div className="pointer-events-none absolute -bottom-16 -left-16 w-[360px] h-[360px] rounded-full opacity-12"
            style={{ background: "radial-gradient(circle, #1a7fe8 0%, transparent 70%)" }} />

          <div className="container mx-auto max-w-6xl relative z-10 flex flex-col lg:flex-row items-center gap-14">
            <div className="flex-1 text-center lg:text-left">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold border border-white/10 bg-white/5 backdrop-blur-sm text-teal-300">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                South African Growth Systems Partner
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-balance leading-tight">
                Your Business Is{" "}
                <span style={{ background: "linear-gradient(90deg, #2dd4a8, #1a7fe8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Losing Revenue
                </span>{" "}
                Through Slow Follow-Up and Broken Systems
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 mb-10 text-balance">
                Alunera builds growth systems that help service businesses capture more leads, reduce admin, and convert faster.
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

            {/* Animated orbit visual */}
            <div className="hidden lg:flex flex-1 w-full max-w-md aspect-square items-center justify-center">
              <div className="relative w-full h-full max-w-[380px] max-h-[380px]">
                <div className="absolute inset-0 border border-teal-400/20 rounded-full animate-[spin_12s_linear_infinite]" />
                <div className="absolute inset-8 border border-blue-400/15 rounded-full animate-[spin_18s_linear_infinite_reverse]" />
                <div className="absolute inset-16 border border-teal-300/10 rounded-full animate-[spin_8s_linear_infinite]" />
                {/* Glow center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full flex items-center justify-center"
                  style={{ background: "radial-gradient(circle, rgba(15,186,142,0.25) 0%, transparent 70%)", border: "1px solid rgba(15,186,142,0.3)" }}>
                  <div className="w-16 h-16 rounded-full animate-pulse"
                    style={{ background: "linear-gradient(135deg, #0fba8e, #1a7fe8)" }} />
                </div>
                {/* Orbiting nodes */}
                {[0, 1, 2].map((i) => (
                  <div key={i} className="absolute top-0 bottom-0 left-1/2 w-0 flex justify-center"
                    style={{ transform: `rotate(${i * 120}deg)` }}>
                    <div className="w-7 h-7 rounded-full -translate-y-3 shadow-lg border border-white/20"
                      style={{ background: i % 2 === 0 ? "#0fba8e" : "#1a7fe8" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEM ── */}
        <section className="py-20 px-4 md:px-6 relative"
          style={{ background: "linear-gradient(180deg, #f0f5fc 0%, #e8f0fa 100%)" }}>
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3">The Problem</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Most Service Businesses Don't Have a Demand Problem —{" "}
                <span className="text-primary">They Have a Systems Problem</span>
              </h2>
              <p className="text-xl text-muted-foreground">Every missed enquiry = lost revenue opportunity.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: XOctagon, title: "Missed enquiries", desc: "Leads fall through the cracks daily" },
                { icon: Clock, title: "Slow response times", desc: "Delayed replies lose warm prospects" },
                { icon: ArchiveX, title: "Manual admin overload", desc: "Hours wasted on repetitive tasks" },
                { icon: MessageSquareWarning, title: "No follow-up systems", desc: "Opportunities die without follow-up" },
                { icon: TrendingDown, title: "Lost opportunities", desc: "Revenue walks out the door silently" },
                { icon: AlertCircle, title: "Disorganised communication", desc: "No single source of truth" },
              ].map((problem, i) => (
                <div key={i}
                  className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ background: "linear-gradient(135deg, rgba(239,68,68,0.12), rgba(239,68,68,0.06))" }}>
                    <problem.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <div className="font-bold text-foreground mb-1">{problem.title}</div>
                  <div className="text-sm text-muted-foreground">{problem.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOLUTION ── */}
        <section className="py-24 px-4 md:px-6 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a1530 0%, #0c1d45 60%, #071226 100%)" }}>
          {/* Teal glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-15"
            style={{ background: "radial-gradient(ellipse, #0fba8e 0%, transparent 70%)" }} />

          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <p className="text-sm font-bold tracking-widest text-teal-400 uppercase mb-3">The Solution</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
              Introducing The Alunera Growth System
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-16">
              We design systems that ensure no lead is lost, no enquiry is delayed, and every opportunity is maximised.
            </p>

            <div className="flex flex-col md:flex-row items-stretch justify-between gap-3 mb-14 relative">
              <div className="hidden md:block absolute top-1/2 left-[8%] right-[8%] h-px -translate-y-1/2 z-0"
                style={{ background: "linear-gradient(90deg, transparent, rgba(15,186,142,0.4), rgba(26,127,232,0.4), transparent)" }} />
              {[
                { stage: "ATTRACT", desc: "Capture demand", color: "#0fba8e" },
                { stage: "CAPTURE", desc: "Never lose a lead", color: "#0fba8e" },
                { stage: "RESPOND", desc: "Instant engagement", color: "#1a7fe8" },
                { stage: "CONVERT", desc: "Automated follow-up", color: "#1a7fe8" },
                { stage: "GROW", desc: "Scale operations", color: "#0fba8e" },
              ].map((step, i) => (
                <div key={i}
                  className="relative z-10 rounded-2xl p-5 flex-1 text-center border hover:scale-105 transition-transform"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(8px)",
                  }}>
                  <div className="text-xs font-black tracking-widest mb-2" style={{ color: step.color }}>{step.stage}</div>
                  <div className="text-xs text-white/50">{step.desc}</div>
                </div>
              ))}
            </div>

            <div className="inline-block rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg"
              style={{ background: "linear-gradient(90deg, #0fba8e, #1a7fe8)" }}>
              Less admin. More conversions. More growth.
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <IndustriesMarquee />

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" className="py-24 px-4 md:px-6"
          style={{ background: "linear-gradient(180deg, #f0f5fc 0%, #ffffff 100%)" }}>
          <div className="container mx-auto max-w-5xl">
            <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3 text-center">The Process</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
              A Simple System That Fixes Revenue Leakage
            </h2>

            <div className="grid md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px z-0"
                style={{ background: "linear-gradient(90deg, #0fba8e, #1a7fe8)" }} />
              {[
                { step: 1, title: "Book Your Free Growth Audit", color: "#0fba8e" },
                { step: 2, title: "Identify Bottlenecks & Lost Opportunities", color: "#0aa87a" },
                { step: 3, title: "Implement Growth System", color: "#1060c8" },
                { step: 4, title: "Improve Efficiency & Increase Conversions", color: "#1a7fe8" },
              ].map((item) => (
                <div key={item.step} className="relative z-10 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-black mb-5 text-white shadow-lg border-4 border-background"
                    style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)` }}>
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-base leading-snug">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY ALUNERA ── */}
        <section className="py-24 px-4 md:px-6 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #071226 0%, #0a1a38 50%, #0d2050 100%)" }}>
          <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] opacity-15"
            style={{ background: "radial-gradient(circle, #1a7fe8 0%, transparent 70%)" }} />
          <div className="pointer-events-none absolute top-0 left-0 w-[300px] h-[300px] opacity-10"
            style={{ background: "radial-gradient(circle, #0fba8e 0%, transparent 70%)" }} />

          <div className="container mx-auto max-w-5xl relative z-10">
            <p className="text-sm font-bold tracking-widest text-teal-400 uppercase mb-3 text-center">Why Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center text-white mb-14">
              Built for Service Businesses That Want Efficiency & Growth
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: MapPin, title: "South African market focus", desc: "Built for local service businesses and the SA market." },
                { icon: Settings, title: "Practical implementation", desc: "Real systems installed, not theoretical frameworks." },
                { icon: Bot, title: "Automation where it matters", desc: "Smart automation that saves hours every week." },
                { icon: ActivitySquare, title: "Operational efficiency focus", desc: "Reduce friction across your entire operation." },
                { icon: BarChart, title: "Conversion-driven systems", desc: "Every system designed to maximise conversions." },
                { icon: Lightbulb, title: "Real business problem solving", desc: "We address root causes, not surface symptoms." },
              ].map((feature, i) => (
                <div key={i}
                  className="rounded-2xl p-6 border hover:scale-[1.02] transition-transform"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(8px)",
                  }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg, rgba(15,186,142,0.25), rgba(26,127,232,0.15))" }}>
                    <feature.icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <h3 className="text-white font-bold mb-1">{feature.title}</h3>
                  <p className="text-white/50 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-24 px-4 md:px-6 relative overflow-hidden"
          style={{ background: "linear-gradient(180deg, #f0f5fc 0%, #e4eefa 100%)" }}>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[300px] rounded-full opacity-20"
              style={{ background: "radial-gradient(ellipse, #0fba8e 0%, transparent 70%)" }} />
          </div>
          <div className="container mx-auto max-w-3xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/20 bg-primary/8 text-primary">
              Free — No Obligation
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
              Find Out Exactly Where Your Business Is{" "}
              <span className="text-primary">Losing Revenue</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Discover missed opportunities, inefficiencies, and automation improvements.
            </p>
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
