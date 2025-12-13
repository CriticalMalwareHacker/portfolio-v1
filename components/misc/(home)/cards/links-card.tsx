import { Github, Linkedin } from "lucide-react";

export const LinksCard = () => {
  return (
    <div className="flex gap-4 h-full">
      <a
        href="https://www.linkedin.com/in/tanay-kumar-5995b4288/"
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu flex-1 flex flex-col justify-center items-center rounded-2xl text-white bg-[#0A66C2] p-4 transition-all"
        rel="noreferrer"
      >
        <Linkedin size={32} />
        <p className="text-xs text-white/90 mt-2 font-medium">LinkedIn</p>
      </a>
      <a
        href="https://github.com/CriticalMalwareHacker"
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu flex-1 flex flex-col justify-center items-center rounded-2xl text-white bg-[#171515] p-4 transition-all"
        rel="noreferrer"
      >
        <Github size={32} />
        <p className="text-xs text-white/90 mt-2 font-medium">GitHub</p>
      </a>
    </div>
  );
};