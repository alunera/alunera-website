import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { TallyFormModal } from "@/components/TallyFormModal";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <div className="w-full bg-background min-h-[calc(100vh-80px)]">
        <section className="bg-secondary text-secondary-foreground py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
              Ready to fix the systems that are costing your business revenue? Start with a free Growth Audit.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Primary CTA Card */}
              <div className="bg-secondary text-secondary-foreground rounded-2xl p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                    Free — No Obligation
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Book Your Free Growth Audit
                  </h2>
                  <p className="text-secondary-foreground/75 text-lg mb-8">
                    In 45 minutes, we'll identify exactly where your business is losing leads, where admin is slowing you down, and what systems would fix it.
                  </p>
                  <ul className="space-y-3 mb-10">
                    {[
                      "Identify your biggest revenue leaks",
                      "Map your current lead & follow-up flow",
                      "Get a clear systems improvement plan",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-secondary-foreground/80">
                        <span className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <ArrowRight className="w-3 h-3 text-primary" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  size="lg"
                  className="w-full h-14 text-lg font-semibold"
                  onClick={() => setIsModalOpen(true)}
                  data-testid="button-contact-audit"
                >
                  Book Free Growth Audit
                </Button>
              </div>

              {/* Info Panel */}
              <div className="flex flex-col gap-6">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-lg font-bold mb-2">Based in South Africa</h3>
                  <p className="text-muted-foreground mb-6">
                    We work exclusively with South African service businesses. All audits are conducted online via video call.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-accent" />
                      </div>
                      <span>South Africa — serving businesses nationwide</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-accent" />
                      </div>
                      <span>hello@alunera.co.za</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-accent" />
                      </div>
                      <span>Available via booked consultation only</span>
                    </div>
                  </div>
                </div>

                <div className="bg-muted border border-border rounded-2xl p-8">
                  <h3 className="text-lg font-bold mb-2">What happens next?</h3>
                  <ol className="space-y-4">
                    {[
                      { n: "1", text: "Book your free 45-minute audit slot" },
                      { n: "2", text: "We review your current systems before the call" },
                      { n: "3", text: "You receive a clear growth systems plan" },
                    ].map((step) => (
                      <li key={step.n} className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {step.n}
                        </span>
                        <span className="text-muted-foreground">{step.text}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <TallyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Layout>
  );
}
