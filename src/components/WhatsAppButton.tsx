import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=6282167808647&text=Hai%20kak%2C%20mau%20tanya%20seputar%20Prompt%20Sakti...";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat WhatsApp"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-elegant hover:shadow-glow transition-all duration-300 group-hover:scale-110"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
      
      <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg bg-card px-4 py-2 text-sm font-medium text-card-foreground shadow-elegant opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Konsultasi via WhatsApp
      </div>
    </a>
  );
};
