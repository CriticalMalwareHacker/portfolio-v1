import { LinksCard } from "@/components/misc/(home)/cards/links-card";
import { StacksCard } from "@/components/misc/(home)/cards/stacks-card";
// Import the new cards directly
import { ResumeCard } from "./cards/resume-card";

export const GridCards = () => {
  return (
    <div className="mt-8">
      {/* Top Row: Work and Resume */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-48 md:h-52">
        <ResumeCard />
      </div>

      {/* Bottom Row: Links and Tech Stack */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {/* Links takes up 1 column on desktop */}
        <div className="md:col-span-1 h-40">
           <LinksCard />
        </div>
        
        {/* Stacks takes up 2 columns on desktop */}
        <div className="md:col-span-2 h-40">
           <StacksCard />
        </div>
      </div>
    </div>
  );
};