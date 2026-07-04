import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918586041111"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-gold text-ink w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-gold-bright transition-colors"
    >
      <MessageCircle size={26} strokeWidth={1.8} />
    </a>
  );
}
