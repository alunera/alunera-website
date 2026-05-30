import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ArrowRight, CheckCircle2, TrendingUp, Clock, Zap } from "lucide-react";
import { TallyFormModal } from "@/components/TallyFormModal";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <div className="w-full">
        {/* Header Section */}
        <section className="bg-secondary text-secondary-foreground py-24 px-4 md:px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none"></div>
          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 text-balance">
              Growth Systems Built for Real Business Problems
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto text-balance">
              We design and install high-performance business systems that eliminate operational bottlenecks and maximize revenue.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 md:py-32 px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  We focus on operational efficiency and system improvement.
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Most service businesses leak revenue because their underlying systems are broken or non-existent. Leads fall through the cracks, follow-ups are delayed, and administrative overhead chokes scaling.
                  </p>
                  <p>
                    Alunera operates differently. We don't just provide consulting—we install systems. We identify the critical bottlenecks in your operations and implement automated, efficient workflows that ensure no opportunity is wasted.
                  </p>
                </div>
              </div>
              
              <div className="bg-muted rounded-xl p-8 border border-border relative">
                <div className="absolute top-0 right-0 p-4 opacity-50">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-6">The System Difference</h3>
                <ul className="space-y-4">
                  {[
                    "Stop losing revenue to delayed responses",
                    "Eliminate repetitive manual administration",
                    "Create predictable, scalable growth mechanisms",
                    "Gain total visibility into your operational flow"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mr-3 mt-0.5" />
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-20 bg-muted/50 border-y border-border px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-16">The 3 Pillars of Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Reduce Manual Work</h3>
                <p className="text-muted-foreground">
                  We automate repetitive tasks and administrative burdens, freeing up your team to focus on high-value client delivery instead of paperwork.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Improve Efficiency</h3>
                <p className="text-muted-foreground">
                  Streamlined workflows ensure that data moves seamlessly through your business, accelerating operations and minimizing errors.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Increase Conversions</h3>
                <p className="text-muted-foreground">
                  By implementing structured follow-up sequences and rapid response mechanisms, we help you capture more leads and close more deals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to optimize your operations?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Stop letting inefficiencies dictate your revenue limit. Find out exactly where your business is losing money.
            </p>
            <Button size="lg" className="h-14 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all" onClick={() => setIsModalOpen(true)}>
              Book Your Free Growth Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </div>
      <TallyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Layout>
  );
}
