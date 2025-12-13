import { DiscordCard } from "./cards/discord-card";
import { GithubCard } from "./cards/github-card";
import { LinktreeCard } from "./cards/linktree-card";
import { ResumeCard } from "./cards/resume-card";
import { StacksCard } from "./cards/stacks-card";
import { TwitterCard } from "./cards/twitter-card";
import { WorkCard } from "./cards/work-card";

export const GridCards = () => {
  return (
    <div className="flex flex-col gap-4 mt-10">
      
      {/* Top Section: Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-auto">
        
        {/* Row 1: Work (2), GitHub (1), Resume (1) */}
        <div className="col-span-2 h-60">
          <WorkCard />
        </div>
        <div className="col-span-1 h-60">
          <GithubCard />
        </div>
        <div className="col-span-1 h-60">
          <ResumeCard />
        </div>

        {/* Row 2: Discord (1), Twitter (1), Linktree (2) */}
        <div className="col-span-1 h-44">
          <DiscordCard />
        </div>
        <div className="col-span-1 h-44">
          <TwitterCard />
        </div>
        <div className="col-span-2 h-44">
          <LinktreeCard />
        </div>
        
      </div>

      {/* Bottom Section: Tech Stack (Full Width) */}
      <div className="w-full">
        <StacksCard />
      </div>

    </div>
  );
};