import { Twitter } from "lucide-react";
import Image from "next/image";
import twitter from "@/public/x.jpg";

export const TwitterCard = () => {
  return (
    <a
      href="http://x.com/CriticalMalwareHacker"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full h-full overflow-hidden rounded-3xl"
    >
      <Image
        src={twitter}
        alt="X (Twitter)"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110 brightness-[0.6] group-hover:brightness-75"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Twitter size={40} className="text-white opacity-80 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="absolute bottom-3 left-4 text-white font-medium text-sm">
        X.com
      </div>
    </a>
  );
};