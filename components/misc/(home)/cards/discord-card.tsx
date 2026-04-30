"use client";

import { Check, Copy, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import discord from "@/public/discord.png";

export const DiscordCard = () => {
  const username = "criticalmalware";
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const copyUsername = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(username);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = username;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
  };

  return (
    <div
      className="group relative block w-full h-full overflow-hidden rounded-3xl"
      style={{ fontFamily: '"gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <Image
        src={discord}
        alt="Discord"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110 brightness-[0.35] group-hover:brightness-[0.28]"
      />
      <div className="absolute inset-0 bg-[#1e1f22]/20 transition-colors group-hover:bg-[#1e1f22]/70" />

      <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-7 group-focus-within:-translate-y-7">
        <MessageCircle size={40} className="text-white opacity-85 transition-opacity group-hover:opacity-0 group-focus-within:opacity-0" />
      </div>

      <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100">
        <div className="w-full max-w-full overflow-hidden whitespace-nowrap text-center text-[clamp(0.625rem,2.1vw,0.8125rem)] font-black leading-none tracking-normal">
          <span className="text-[#b5bac1]">#</span>
          <span className="text-white">criticalmalware</span>
        </div>
      </div>

      <button
        type="button"
        onClick={copyUsername}
        className="absolute inset-x-3 bottom-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white opacity-0 backdrop-blur-md transition-all hover:bg-white/20 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/40 group-hover:opacity-100"
        aria-label="Copy Discord username"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? "Copied" : "Copy"}
      </button>

      <div className="absolute bottom-3 left-4 text-white font-medium text-sm transition-opacity group-hover:opacity-0 group-focus-within:opacity-0">
        Discord
      </div>
    </div>
  );
};
