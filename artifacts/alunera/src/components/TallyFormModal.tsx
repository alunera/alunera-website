import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

export function TallyFormModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when modal opens
  useEffect(() => {
    if (isOpen) setIsLoading(true);
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] h-[80vh] p-0 overflow-hidden bg-background">
        <DialogTitle className="sr-only">Growth Audit Booking Form</DialogTitle>
        <DialogDescription className="sr-only">Fill out this form to book your free growth audit with Alunera.</DialogDescription>
        <div className="relative w-full h-full">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}
          <iframe 
            src="https://tally.so/embed/FORM_ID?transparentBackground=1&hideTitle=1" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0} 
            title="Growth Audit Booking Form"
            onLoad={() => setIsLoading(false)}
            className="w-full h-full bg-background"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
