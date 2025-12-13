import {
  IconCloudflare,
  SkillIconsDocker as IconDocker,
  IconFigma,
  IconFirebase,
  IconGit,
  SkillIconsGolang as IconGolang,
  SkillIconsGraphqlDark as IconGraphql,
  IconMySQL,
  IconNextJS,
  IconNodeJS,
  IconPostgres,
  IconPrisma,
  IconPython,
  IconReactJS,
  IconTailwindcss,
  IconTypescript,
  IconVite,
  LogosVisualStudioCode as IconVsCode,
  VscodeIconsFileTypeCpp3 as IconCpp,
} from "@/components/icons";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

const TechItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-200/50 dark:bg-white/5 backdrop-blur-md border border-zinc-200/50 dark:border-white/10 shadow-sm transition-transform duration-300 hover:scale-110">
      <div className="h-7 w-7 text-zinc-700 dark:text-zinc-200 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export const StacksCard = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50">
      
      {/* Background Grid Pattern with Strong Radial Fade */}
      <div 
        className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"
        style={{
          maskImage: "radial-gradient(circle at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 80%)",
        }}
      ></div>
      
      {/* Container for Sliders */}
      <div className="flex h-full w-full flex-col justify-center gap-8 py-8">
        
        {/* Row 1: Languages & Frameworks */}
        <InfiniteSlider gap={24} duration={40}>
          <TechItem><IconTypescript /></TechItem>
          <TechItem><IconPython /></TechItem>
          <TechItem><IconGolang /></TechItem>
          <TechItem><IconCpp /></TechItem>
          <TechItem><IconNextJS /></TechItem>
          <TechItem><IconReactJS /></TechItem>
          <TechItem><IconNodeJS /></TechItem>
          <TechItem><IconTailwindcss /></TechItem>
          <TechItem><IconFigma /></TechItem>
          <TechItem><IconVite /></TechItem>
        </InfiniteSlider>

        {/* Row 2: Tools, Backend & Design (Reverse) */}
        <InfiniteSlider gap={24} duration={50} reverse>
          <TechItem><IconPostgres /></TechItem>
          <TechItem><IconMySQL /></TechItem>
          <TechItem><IconDocker /></TechItem>
          <TechItem><IconGit /></TechItem>
          <TechItem><IconPrisma /></TechItem>
          <TechItem><IconGraphql /></TechItem>
          <TechItem><IconFirebase /></TechItem>
          <TechItem><IconVsCode /></TechItem>
          <TechItem><IconCloudflare /></TechItem>
        </InfiniteSlider>

      </div>
    </div>
  );
};