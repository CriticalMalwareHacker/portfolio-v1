import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import workImg from "@/public/work.jpg";

export const WorkCard = () => {
  return (
    <Link href="/work" className="group relative block w-full h-full overflow-hidden rounded-3xl">
      <Image
        src={workImg}
        alt="Work"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110 brightness-75 group-hover:brightness-90"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">Featured Work</h3>
            <p className="text-sm text-zinc-300 mt-1">
              Projects, Startups & Code
            </p>
          </div>
          <div className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white group-hover:bg-white/20 transition-colors">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </Link>
  );
};