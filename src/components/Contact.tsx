import { Phone, MessageCircle, Clock, MapPin, Navigation } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="visit" className="bg-ink text-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <span className="text-gold text-xs tracking-[0.3em] uppercase">
            Visit the Store
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mt-3">
            Come see it in hand
          </h2>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
          <Reveal className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <p className="text-sm text-ivory/60 tracking-wide">Address</p>
                <p className="mt-1 leading-relaxed">
                  6/69 Shri Raj Jewellers, Tilak Nagar,
                  <br />
                  Near Metro Gate No. 1, New Delhi, Delhi 110018
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Shri+Raj+Jewellers+6%2F69+Tilak+Nagar+New+Delhi+110018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-gold text-sm hover:text-gold-bright"
                >
                  <Navigation size={14} /> Get Directions
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <p className="text-sm text-ivory/60 tracking-wide">Hours</p>
                <p className="mt-1">Weekly off: Wednesday</p>
                <p>Saturday: 11:00 AM – 8:00 PM</p>
                <p className="text-ivory/50 text-sm mt-1">
                  For other days&apos; timing, please call ahead.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <p className="text-sm text-ivory/60 tracking-wide">Call</p>
                <a href="tel:+918586041111" className="mt-1 block hover:text-gold">
                  +91 85860 41111
                </a>
                <a href="tel:+918586031111" className="block hover:text-gold">
                  +91 85860 31111
                </a>
                <a href="tel:+918586021111" className="block hover:text-gold">
                  +91 85860 21111
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <MessageCircle className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <p className="text-sm text-ivory/60 tracking-wide">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/918586041111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block hover:text-gold"
                >
                  +91 85860 41111
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="h-80 sm:h-full min-h-80 border border-gold/20">
            <iframe
              title="Shri Raj Jewellers location"
              src="https://www.google.com/maps?q=Shri+Raj+Jewellers+6%2F69+Tilak+Nagar+New+Delhi+110018&output=embed"
              className="w-full h-full grayscale-0"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
