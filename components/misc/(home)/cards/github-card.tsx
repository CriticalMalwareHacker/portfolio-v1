import { Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import cardBg from "@/public/github.png"; // Using one of your abstract images

export const GithubCard = () => {
  return (
    <a
      href="https://github.com/CriticalMalwareHacker"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full h-full overflow-hidden rounded-3xl"
    >
      <Image
        src={cardBg}
        alt="GitHub"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110 brightness-[0.6] group-hover:brightness-75 grayscale"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white group-hover:bg-white/20 transition-colors">
          <Github size={32} />
        </div>
        <div className="flex items-center gap-1 text-white/90 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
          <span>View Code</span>
          <ArrowUpRight size={14} />
        </div>
      </div>
      <div className="absolute bottom-3 left-0 right-0 text-center text-white font-medium text-sm opacity-90 group-hover:opacity-0 transition-opacity">
        GitHub
      </div>
    </a>
  );
};