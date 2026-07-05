import { InstagramMark } from "./Icons";
import Reveal from "./Reveal";
import InstagramEmbed from "./InstagramEmbed";

// Real reel links from the shop's Instagram (@shrirajjewellers_)
const posts = [
  "https://www.instagram.com/reel/DAc3FL8SuEM/",
  "https://www.instagram.com/reel/DaXM-vHPu6d/",
  "https://www.instagram.com/reel/DaMx36nRzLw/",
];

export default function InstagramCTA() {
  return (
    <section className="bg-ivory py-16 sm:py-20 border-y border-gold/15">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center flex flex-col items-center">
          <InstagramMark size={26} className="text-gold" />
          <h2 className="font-display text-2xl sm:text-3xl mt-4">
            Latest from Instagram
          </h2>
          <p className="text-ink/60 mt-2">
            Follow <span className="text-ink/80">@shrirajjewellers_</span>{" "}
            for new arrivals, offers and reels
          </p>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {posts.map((url, i) => (
            <Reveal
              key={url}
              delay={i * 90}
              className="w-full flex justify-center"
            >
              <InstagramEmbed url={url} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={280} className="flex justify-center">
          <a
            href="https://instagram.com/shrirajjewellers_"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-ink transition-colors text-sm tracking-wide px-6 py-3"
          >
            Follow on Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
