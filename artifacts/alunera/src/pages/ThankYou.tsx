import { Layout } from "@/components/Layout";

export default function ThankYou() {
  return (
    <Layout>
      <div className="w-full min-h-[calc(100vh-80px-300px)] bg-background flex flex-col items-center py-16 px-4 md:px-6">
        <div className="w-full max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Your Growth Audit Request Has Been Received
          </h1>
          <p className="text-lg text-muted-foreground">
            We're reviewing your information. Next step: schedule your Growth Audit.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto bg-background rounded-xl border border-border shadow-sm overflow-hidden min-h-[600px]">
          {/* Cal.com embed */}
          <iframe 
            src="https://cal.com/alunera/growth-audit?embed=true" 
            className="w-full h-[600px]"
            frameBorder="0"
          />
        </div>
      </div>
    </Layout>
  );
}
