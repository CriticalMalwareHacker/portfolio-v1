import { Linkedin, Mail, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import usesImg from "@/public/images/(home)/books.jpg";

export const LinktreeCard = () => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl group">
      <Image
        src={usesImg}
        alt="Links"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-[0.4]"
      />
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex items-center gap-2 text-white/90">
          <LinkIcon size={18} />
          <span className="font-semibold">Quick Links</span>
        </div>
        
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/tanay-kumar-5995b4288/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex flex-col items-center justify-center text-white transition-all hover:scale-95"
          >
            <Linkedin size={24} className="mb-1" />
            <span className="text-xs">LinkedIn</span>
          </a>
          
          <a
            href="mailto:criticalmalware123@gmail.com"
            className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex flex-col items-center justify-center text-white transition-all hover:scale-95"
          >
            <Mail size={24} className="mb-1" />
            <span className="text-xs">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};