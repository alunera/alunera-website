import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { IndustriesMarquee } from "@/components/IndustriesMarquee";
import { TallyFormModal } from "@/components/TallyFormModal";
import { 
  ArrowRight, 
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
  Lightbulb
} from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <div className="w-full">
        {/* HERO SECTION */}
        <section className="bg-secondary text-secondary-foreground pt-24 pb-32 px-4 md:px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto max-w-6xl relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 text-balance leading-tight">
                Your Business Is Losing Revenue Through Slow Follow-Up and Broken Systems
              </h1>
              <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto lg:mx-0 mb-10 text-balance">
                Alunera builds growth systems that help service businesses capture more leads, reduce admin, and convert faster.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto" onClick={() => setIsModalOpen(true)}>
                  Book Your Free Growth Audit
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 w-full sm:w-auto" onClick={scrollToHowItWorks}>
                  Learn How It Works
                </Button>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg aspect-square relative flex items-center justify-center hidden lg:flex">
              {/* Abstract Workflow Visual */}
              <div className="relative w-full h-full max-w-[400px] max-h-[400px]">
                <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 border border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                
                {/* Center Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/50">
                  <div className="w-16 h-16 bg-primary rounded-full animate-pulse opacity-80" />
                </div>
                
                {/* Orbiting Nodes */}
                {[0, 1, 2].map((i) => (
                  <div key={i} className={`absolute top-0 bottom-0 left-1/2 w-0 flex justify-center`} style={{ transform: `rotate(${i * 120}deg)` }}>
                    <div className="w-8 h-8 bg-accent rounded-full -translate-y-4 shadow-[0_0_15px_rgba(var(--accent)/0.5)] border border-white/20" />
                    <div className="absolute top-0 w-px h-1/2 bg-gradient-to-b from-accent to-transparent opacity-50" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-20 bg-background px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Most Service Businesses Don't Have a Demand Problem — They Have a Systems Problem
              </h2>
              <p className="text-xl text-muted-foreground">Every missed enquiry = lost revenue opportunity.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: XOctagon, title: "Missed enquiries" },
                { icon: Clock, title: "Slow response times" },
                { icon: ArchiveX, title: "Manual admin overload" },
                { icon: MessageSquareWarning, title: "No follow-up systems" },
                { icon: TrendingDown, title: "Lost opportunities" },
                { icon: AlertCircle, title: "Disorganised communication" },
              ].map((problem, i) => (
                <div key={i} className="bg-muted rounded-xl p-6 border border-border flex items-start space-x-4">
                  <div className="bg-destructive/10 p-3 rounded-lg shrink-0">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="pt-1 font-medium">{problem.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section className="py-24 bg-muted/30 border-y border-border px-4 md:px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Introducing The Alunera Growth System</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
              We design systems that ensure no lead is lost, no enquiry is delayed, and every opportunity is maximised.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 mb-16 relative">
              <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-border -translate-y-1/2 z-0" />
              
              {[
                { stage: "ATTRACT", desc: "Capture demand" },
                { stage: "CAPTURE", desc: "Never lose a lead" },
                { stage: "RESPOND", desc: "Instant engagement" },
                { stage: "CONVERT", desc: "Automated follow-up" },
                { stage: "GROW", desc: "Scale operations" },
              ].map((step, i) => (
                <div key={i} className="relative z-10 bg-background border border-border rounded-xl p-6 shadow-sm w-full md:w-auto md:flex-1 text-center group hover:border-primary transition-colors">
                  <div className="text-sm font-bold text-primary tracking-widest mb-2">{step.stage}</div>
                  <div className="text-sm text-muted-foreground">{step.desc}</div>
                </div>
              ))}
            </div>

            <div className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full text-lg shadow-md">
              Less admin. More conversions. More growth.
            </div>
          </div>
        </section>

        {/* INDUSTRIES MARQUEE */}
        <IndustriesMarquee />

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-24 bg-background px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">A Simple System That Fixes Revenue Leakage</h2>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-border z-0" />
              
              {[
                { step: 1, title: "Book Your Free Growth Audit" },
                { step: 2, title: "Identify Bottlenecks & Lost Opportunities" },
                { step: 3, title: "Implement Growth System" },
                { step: 4, title: "Improve Efficiency & Increase Conversions" },
              ].map((item) => (
                <div key={item.step} className="relative z-10 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xl font-bold mb-6 shadow-md border-4 border-background">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY ALUNERA */}
        <section className="py-24 bg-secondary text-secondary-foreground px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-white mb-16">
              Built for Service Businesses That Want Efficiency & Growth
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: MapPin, title: "South African market focus" },
                { icon: Settings, title: "Practical implementation" },
                { icon: Bot, title: "Automation where it matters" },
                { icon: ActivitySquare, title: "Operational efficiency focus" },
                { icon: BarChart, title: "Conversion-driven systems" },
                { icon: Lightbulb, title: "Real business problem solving" },
              ].map((feature, i) => (
                <div key={i} className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-xl p-6 hover:bg-secondary-foreground/10 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-24 bg-background px-4 md:px-6 text-center border-t border-border">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Find Out Exactly Where Your Business Is Losing Revenue
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Discover missed opportunities, inefficiencies, and automation improvements.
            </p>
            <Button size="lg" className="h-14 px-10 text-lg font-semibold shadow-lg hover:shadow-xl transition-all" onClick={() => setIsModalOpen(true)}>
              Book Your Free Growth Audit
            </Button>
          </div>
        </section>
      </div>

      <TallyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Layout>
  );
}
