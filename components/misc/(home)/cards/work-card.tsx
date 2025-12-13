import { Briefcase, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const WorkCard = () => {
  return (
    <Link href="/work" className="group h-full block">
      <div className="flex flex-col justify-between h-full p-6 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-all duration-300">
        <div className="flex justify-between items-start">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
            <Briefcase size={24} />
          </div>
          <ArrowUpRight className="text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium">Work & Experience</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            FTC Supervisor, Developer's Club, and Freelance Projects.
          </p>
        </div>
      </div>
    </Link>
  );
};