import { MessageCircle } from "lucide-react";
import Image from "next/image";
import discord from "@/public/discord.png";

export const DiscordCard = () => {
  return (
    <a
      href="#" // Replace with your Discord invite/profile link
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full h-full overflow-hidden rounded-3xl"
    >
      <Image
        src={discord}
        alt="Discord"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110 brightness-[0.6] group-hover:brightness-75"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <MessageCircle size={40} className="text-white opacity-80 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="absolute bottom-3 left-4 text-white font-medium text-sm">
        Discord
      </div>
    </a>
  );
};