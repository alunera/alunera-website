import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { TallyFormModal } from "@/components/TallyFormModal";
import { 
  Stethoscope, 
  Syringe, 
  Scale, 
  Calculator, 
  ShieldCheck, 
  Zap, 
  Wrench, 
  GraduationCap, 
  Users 
} from "lucide-react";

export default function Industries() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const industries = [
    {
      name: "Aesthetic Clinics",
      icon: Stethoscope,
      problems: [
        "High volume of social media DMs getting missed",
        "No structured follow-up for high-ticket procedures",
        "Front desk overwhelmed with scheduling changes"
      ],
      leadsLost: "During off-hours and busy clinic days when DMs/emails sit unread.",
      adminSlows: "Manually sending pre/post care instructions and managing deposits.",
      systemsFix: "Automated booking sequences, instant lead capture from all channels, and structured follow-ups."
    },
    {
      name: "Dental Practices",
      icon: Syringe,
      problems: [
        "Patient no-shows and last-minute cancellations",
        "Losing complex treatment leads due to poor follow-up",
        "Inefficient recall systems for routine checkups"
      ],
      leadsLost: "When treatment plans are presented but not actively nurtured afterwards.",
      adminSlows: "Phone tagging for appointment confirmations and sending intake forms.",
      systemsFix: "Automated recall campaigns, smart appointment reminders, and treatment plan follow-up sequences."
    },
    {
      name: "Law Firms",
      icon: Scale,
      problems: [
        "Slow response times to sensitive initial enquiries",
        "Manual client intake and document collection",
        "Disorganized communication across multiple channels"
      ],
      leadsLost: "When a potential client doesn't get an immediate response and calls another firm.",
      adminSlows: "Drafting repetitive engagement letters and chasing clients for documents.",
      systemsFix: "Instant intake workflows, automated document requests, and centralized client communication."
    },
    {
      name: "Accounting Firms",
      icon: Calculator,
      problems: [
        "Seasonal bottlenecks during tax time",
        "Chasing clients for information and signatures",
        "Inconsistent client onboarding experience"
      ],
      leadsLost: "When prospects ask for quotes and follow-ups fall through the cracks.",
      adminSlows: "Manual data requests, repeated status updates, and disorganized file sharing.",
      systemsFix: "Client portal automation, scheduled document requests, and structured onboarding workflows."
    },
    {
      name: "Security Companies",
      icon: ShieldCheck,
      problems: [
        "Delayed quotes costing emergency installations",
        "Messy dispatch and technician scheduling",
        "Manual contract and SLA management"
      ],
      leadsLost: "When security is needed urgently but the quoting process takes too long.",
      adminSlows: "Creating custom proposals and managing recurring billing manually.",
      systemsFix: "Rapid quote generation, automated service scheduling, and digital contract signing."
    },
    {
      name: "Electricians",
      icon: Zap,
      problems: [
        "Missing calls while on site or driving",
        "Forgetting to follow up on issued quotes",
        "Poor job tracking and invoicing delays"
      ],
      leadsLost: "When the phone rings to voicemail and the customer calls the next electrician.",
      adminSlows: "Writing quotes late at night and chasing unpaid invoices.",
      systemsFix: "Missed-call text back, automated quote follow-ups, and streamlined job-to-invoice workflows."
    },
    {
      name: "Plumbers",
      icon: Wrench,
      problems: [
        "Emergency calls lost to slow responses",
        "Inefficient scheduling and routing",
        "Losing track of recurring maintenance opportunities"
      ],
      leadsLost: "Emergency jobs lost because someone couldn't answer the phone immediately.",
      adminSlows: "Manual dispatching and double-entry of job details into accounting software.",
      systemsFix: "Instant automated responses to web enquiries, smart scheduling, and maintenance reminders."
    },
    {
      name: "Private Schools",
      icon: GraduationCap,
      problems: [
        "Leaky admissions pipelines",
        "Overwhelming administrative load during enrollment",
        "Poor communication tracking with prospective parents"
      ],
      leadsLost: "When parents request information but don't receive a timely, structured nurture sequence.",
      adminSlows: "Processing paper applications and manually organizing open day registrations.",
      systemsFix: "Automated enrollment pipelines, digital form processing, and structured parent nurture campaigns."
    },
    {
      name: "Consultants",
      icon: Users,
      problems: [
        "Time wasted scheduling discovery calls",
        "Inconsistent lead generation and nurture",
        "Manual proposal creation and pipeline management"
      ],
      leadsLost: "When a prospect shows interest but the friction to book a call is too high.",
      adminSlows: "Back-and-forth emails to find meeting times and writing custom proposals from scratch.",
      systemsFix: "Frictionless booking systems, automated pipeline tracking, and templated proposal generation."
    }
  ];

  return (
    <Layout>
      <div className="w-full bg-background min-h-screen pb-24">
        <section className="bg-secondary text-secondary-foreground py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Systems Designed For Your Industry
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
              We understand the specific bottlenecks that hold your service business back.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, i) => (
                <div key={i} className="bg-card text-card-foreground border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="p-6 border-b border-border bg-muted/30">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <industry.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold tracking-tight">{industry.name}</h2>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-6">
                      <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Common Problems</h3>
                      <ul className="space-y-2">
                        {industry.problems.map((problem, idx) => (
                          <li key={idx} className="text-sm flex items-start">
                            <span className="text-destructive mr-2 mt-0.5">•</span>
                            <span>{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-1">Where Leads Are Lost</h3>
                        <p className="text-sm text-foreground/80">{industry.leadsLost}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-1">Where Admin Slows Operations</h3>
                        <p className="text-sm text-foreground/80">{industry.adminSlows}</p>
                      </div>
                      <div className="bg-accent/5 border border-accent/20 p-3 rounded-lg">
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-accent mb-1">The Systems Fix</h3>
                        <p className="text-sm text-foreground/90">{industry.systemsFix}</p>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Button className="w-full" onClick={() => setIsModalOpen(true)}>
                        Book Growth Audit
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <TallyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Layout>
  );
}
