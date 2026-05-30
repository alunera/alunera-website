import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { TallyFormModal } from "@/components/TallyFormModal";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Placeholder HubSpot Webhook URL
      const webhookUrl = "https://api.hsforms.com/submissions/v3/integration/webhook/PORTAL_ID/FORM_ID";
      
      // Simulate API call for the mockup
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Submitting to HubSpot:", data);
      
      // In a real app with a real webhook:
      // await fetch(webhookUrl, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <Layout>
      <div className="w-full bg-background min-h-[calc(100vh-80px)]">
        <section className="bg-secondary text-secondary-foreground py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Contact Alunera
            </h1>
            <p className="text-xl text-secondary-foreground/80">
              Have a question before booking your audit? Reach out below.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
              
              {/* Contact Form */}
              <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                
                {status === "success" ? (
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-6 text-center">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-2">Message Sent</h3>
                    <p className="text-green-700 dark:text-green-500/80 mb-6">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                    <Button variant="outline" onClick={() => setStatus("idle")}>
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status === "error" && (
                      <div className="bg-destructive/10 border border-destructive/20 text-destructive p-4 rounded-md flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <p className="text-sm">Something went wrong sending your message. Please try again later.</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" required placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name</Label>
                        <Input id="businessName" name="businessName" required placeholder="Acme Corp" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="+27 00 000 0000" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        required 
                        placeholder="How can we help you?"
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={status === "submitting"}>
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>

              {/* Alternative CTA */}
              <div className="flex flex-col justify-center">
                <div className="bg-muted rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Want to skip the line?</h2>
                  <p className="text-muted-foreground mb-8 text-lg">
                    If you already know your business needs better systems, don't wait for an email response. Book a free Growth Audit directly on our calendar.
                  </p>
                  <Button size="lg" className="w-full h-14 text-lg" onClick={() => setIsModalOpen(true)}>
                    Book Free Growth Audit
                  </Button>
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
