"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

let scriptRequested = false;

export default function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    if (scriptRequested) return;
    scriptRequested = true;

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => window.instgrm?.Embeds.process();
    document.body.appendChild(script);
  }, [url]);

  return (
    <blockquote
      className="instagram-media w-full"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ margin: "0 auto" }}
    >
      <a
        href="https://instagram.com/shrirajjewellers_"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on Instagram
      </a>
    </blockquote>
  );
}
